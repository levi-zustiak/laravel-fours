<?PHP

namespace App\Models;

use App\Enums\LobbyStatus;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Lobby extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'status',
        'host_id',
        'peer_id',
    ];

    protected $casts = [
        'status' => LobbyStatus::class,
    ];

    public function host(): BelongsTo
    {
        return $this->belongsTo(User::class, 'host_id', 'id');
    }

    public function peer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'peer_id', 'id');
    }

    public function game(): HasOne
    {
        return $this->hasOne(Game::class);
    }
}
