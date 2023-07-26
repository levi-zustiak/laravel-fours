<?php

namespace App\Http\Controllers;

use App\Enums\PlayerType;
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
        $this->lobbyService->connect($request->validated()['lobby_id'], $request->user());

        return back();
    }

    public function update(Lobby $lobby)
    {
        $lobby->update([
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
//        $lobby = $request->user()->lobbies()->exists();
//
//        if ($lobby) {
//            abort(403, 'User is aleady in a lobby');
//        }

        $lobby = $request->user()->lobbies()->first() ?: Lobby::create();

        $request->user()->lobbies()->syncWithPivotValues($lobby, ['type' => PlayerType::HOST]);

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
