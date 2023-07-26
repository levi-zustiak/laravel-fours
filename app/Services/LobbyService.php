<?php

namespace App\Services;

use App\Enums\PlayerType;
use App\Events\Connected;
use App\Events\StartGame;
use App\Models\Lobby;
use App\Models\User;

class LobbyService
{
    public function connect(string $lobbyId, User $user)
    {
        $lobby = Lobby::find($lobbyId);

        $lobby->players()->attach($user, ['type' => PlayerType::PEER]);

        $game = $this->createGame($lobby);

        Connected::dispatch($lobby);

        StartGame::dispatch($lobby, $game);

        return $game;
    }

    private function createGame(Lobby $lobby)
    {
        $lobby->load(['hosts', 'peers']);

        $host = $lobby->hosts->first();
        $peer = $lobby->peers->first();

        $currentPlayer = (bool)random_int(0, 1);

        $game = $lobby->game()->make([
            'current_player' => $currentPlayer,
            'board' => array_fill(0, 7, array_fill(0, 6, null)),
        ]);

        $game->playerOne()->associate($currentPlayer ? $host : $peer);
        $game->playerTwo()->associate($currentPlayer ? $peer : $host);

        $game->save();

        return $game;
    }
}
