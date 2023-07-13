<?php

namespace App\Http\Controllers;

use App\Events\Connected;
use App\Events\LobbyStart;
use App\Http\Requests\StoreLobbyRequest;
use App\Http\Resources\LobbyResource;
use App\Models\Lobby;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LobbyController extends Controller
{
    public function join(): Response
    {
        return Inertia::render('Lobby/Join');
    }

    public function edit(Request $request, Lobby $lobby)
    {
        if (!$request->user()->peer && !$lobby->peer()->exists()) {
            $lobby->update([
                'peer_id' => $request->user()->id,
                'status' => 'connected',
            ]);
        }

        Connected::dispatch($lobby);
    }

    public function update(Lobby $lobby)
    {
        $lobby->update([
            'peer_id' => null,
            'status' => 'disconnected',
        ]);

        return to_route('home');
    }

    public function create(Request $request): Response
    {
        $user = $request->user();

        $lobby = $user->host ?: $user->host()->create([
            'host_id' => $request->user()->id,
            'status' => 'pending',
        ]);

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
