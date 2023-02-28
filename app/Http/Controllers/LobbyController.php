<?php

namespace App\Http\Controllers;

use App\Events\Connected;
use App\Http\Requests\StoreLobbyRequest;
use App\Http\Resources\LobbyResource;
use App\Models\Lobby;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LobbyController extends Controller
{
    public function index(Request $request): Response
    {
        $lobby = $request->user()->host ?: Lobby::create([
            'host_id' => $request->user()->id,
            'status' => 'pending',
        ]);

        return Inertia::render('Lobby/Create', [
            'lobby' => new LobbyResource($lobby),
        ]);
    }

    public function edit(Request $request, Lobby $lobby): Response
    {
        if ($request->user()->peer);

        if ($lobby) {
            if (!$request->user()->peer && !$lobby->peer) {
                $lobby->update([
                    'peer_id' => $request->user()->id,
                    'status' => 'connected',
                ]);

                Connected::dispatch($lobby);
            }
        }

        return Inertia::render('Lobby/Join', [
            'lobby' => new LobbyResource($lobby),
        ]);
    }

    public function store(StoreLobbyRequest $request)
    {
        $lobby = Lobby::create($request->validated());

        return Inertia::render('Lobby/Create', [
            'lobby' => new LobbyResource($lobby),
        ]);
    }

    public function update(Lobby $lobby)
    {
        $lobby->update([
            'peer_id' => null,
            'status' => 'disconnected',
        ]);

        return to_route('home');
    }

    public function destroy(Lobby $lobby)
    {
        $lobby->delete();

        return to_route('home');
    }
}
