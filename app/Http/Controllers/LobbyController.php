<?php

namespace App\Http\Controllers;

use App\Events\LobbyStart;
use App\Http\Requests\JoinLobbyRequest;
use App\Http\Requests\StoreLobbyRequest;
use App\Http\Resources\LobbyResource;
use App\Models\Lobby;
use App\Services\LobbyService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LobbyController extends Controller
{
    public function __construct(protected LobbyService $lobbyService)
    {
    }

    public function connect(JoinLobbyRequest $request)
    {
        $game = $this->lobbyService->connect($request->validated()['lobby_id'], $request->user());

        return to_route('game.index', ['game' => $game]);
    }

    public function update(Lobby $lobby)
    {
        $lobby->update([
            'peer_id' => null,
            'status' => 'disconnected',
        ]);

        return to_route('home');
    }

    public function join(): Response
    {
        return Inertia::render('Lobby/Join');
    }

    public function create(Request $request): Response
    {
        $lobby = $request->user()->host ?: $request->user()->host()->create();

        return Inertia::render('Lobby/Create', [
            'lobby' => new LobbyResource($lobby),
        ]);
    }

    public function destroy(Lobby $lobby)
    {
        $lobby->delete();

        return to_route('home');
    }
}
