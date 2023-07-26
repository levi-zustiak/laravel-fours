<?PHP

namespace App\Models;

use App\Enums\LobbyStatus;
use App\Enums\PlayerType;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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

    public function hosts(): BelongsToMany
    {
        return $this->players()->wherePivot('type', PlayerType::HOST);

    public function peer()
    {
        return $this->peers()->first();
    }

    public function peers(): BelongsToMany
    {
        return $this->players()->wherePivot('type', PlayerType::PEER);
    }

    public function game(): HasOne
    {
        return $this->hasOne(Game::class);
    }
}
