<?php

namespace App\Http\Controllers;

use App\Http\Resources\GameResource;
use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{
    public function index(Game $game): Response
    {
        return Inertia::render('Game/Index', [
            'game' => fn() => new GameResource($game),
        ]);
    }

    public function update(Request $request, Game $game)
    {
        $game->handleMove($request->user(), $request->input('col'));
    }
}

