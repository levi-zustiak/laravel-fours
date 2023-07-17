<?php

namespace App\Http\Controllers;

use App\Http\Resources\GameResource;
use App\Models\Game;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{
    public function index(Game $game): Response
    {
        dd($game);
        return Inertia::render('Game/Index', [
            'game' => new GameResource($game),
        ]);
    }
}
