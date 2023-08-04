<?php

namespace App\Models;

use App\Events\GameUpdate;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Database\Eloquent\BroadcastsEvents;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Game extends Model
{
    use BroadcastsEvents, HasFactory, HasUuids;

    public $with = [
        'playerOne',
        'playerTwo',
    ];

    protected $fillable = [
        'player_one',
        'player_two',
        'current_player',
        'in_progress',
        'board',
    ];

    protected $hidden = [
        'lobby_id',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'board' => 'array',
    ];

    public function lobby(): BelongsTo
    {
        return $this->belongsTo(Lobby::class);
    }

    public function playerOne(): BelongsTo
    {
        return $this->belongsTo(User::class, 'player_one');
    }

    public function playerTwo(): BelongsTo
    {
        return $this->belongsTo(User::class, 'player_two');
    }

    public function broadcastOn(string $event): array
    {
        return [
            new PrivateChannel('games.' . $this->id)
        ];
    }

    public function broadcastAs(string $event): string|null
    {
        return match ($event) {
            'updated' => 'game:update',
            default => null,
        };
    }

    public function handleMove(User $user, int $col)
    {
        $board = $this->board;
//        $board = array_fill(0, 7, array_fill(0, 6, null));
        $row = array_search(null, $this->board[$col]);

        $board[$col][$row] = [
            'id' => 1,
            'player' => $user,
            'played_by' => $this->current_player,
            'position' => [
                'col' => $col,
                'row' => $row,
            ],
        ];

        $this->update([
            'board' => $board,
            'current_player' => !$this->current_player
        ]);

        GameUpdate::dispatch($this);
    }
}
