<?php

namespace App\Models;

use App\Enums\PlayerType;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Player extends Pivot
{
    protected $casts = [
        'type' => PlayerType::class,
    ];
}
