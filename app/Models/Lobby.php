<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Lobby extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'status',
        'host_id',
        'peer_id',
    ];

    public function host(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'host_id');
    }

    public function peer(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'peer_id');
    }

    public function games(): HasMany
    {
        return $this->hasMany(Game::class);
    }

    public function game(): Game
    {
        return $this->hasMany(Game::class)
            ->where('game_over', false)
            ->first();
    }
}
