<?PHP

namespace App\Models;

use App\Enums\LobbyStatus;
use App\Enums\PlayerType;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Lobby extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'status',
    ];

    protected $casts = [
        'status' => LobbyStatus::class,
    ];

    public function host(): BelongsToMany
    {
        return $this->players()->wherePivot('type', PlayerType::HOST);
    }

    public function players(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'players')
            ->using(Player::class)
            ->withPivot('type');
    }

    public function peer(): BelongsToMany
    {
        return $this->players()->wherePivot('type', PlayerType::PEER);
    }

    public function game(): HasOne
    {
        return $this->hasOne(Game::class);
    }
}
