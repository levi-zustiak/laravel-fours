<?php

namespace App\Services;

use App\Events\StartGame;
use App\Models\Lobby;
use App\Models\User;

class LobbyService
{
    public function connect(string $lobbyId, User $user)
    {
        $lobby = Lobby::find($lobbyId);

        $lobby->peer()->associate($user)->save();

        $game = $this->createGame($lobby);

        StartGame::dispatch($lobby, $game);

        return $game;
    }

    private function createGame(Lobby $lobby)
    {
        $currentPlayer = (bool)random_int(0, 1);

        return $lobby->game()->create([
            'player_one' => $currentPlayer ? $lobby->host_id : $lobby->peer_id,
            'player_two' => $currentPlayer ? $lobby->peer_id : $lobby->host_id,
            'current_player' => $currentPlayer,
            'board' => array_fill(0, 7, array_fill(0, 6, null)),
        ]);
    }
}
