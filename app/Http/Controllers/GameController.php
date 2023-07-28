<?php

namespace App\Http\Controllers;

use App\Events\GameUpdate;
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
        $board = $game->board;
        $col = $request->input('col');
        $row = array_search(null, $game->board[$col]);

        $board[$col][$row] = [
            'id' => 1,
            'player' => $request->user(),
            'position' => [
                'col' => $col,
                'row' => $row,
            ],
        ];

        $game->update([
            'board' => $board,
        ]);

        GameUpdate::dispatch($game);
    }
}
