<?php

namespace App\Listeners;

use App\Events\Connected;
use App\Events\StartGame;

class CreateGame
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     */
    public function handle(Connected $event): void
    {
        $lobby = $event->lobby;
        $currentPlayer = (bool)random_int(0, 1);

        $lobby->game()->create([
            'player_one' => $currentPlayer ? $lobby->host_id : $lobby->peer_id,
            'player_two' => $currentPlayer ? $lobby->peer_id : $lobby->host_id,
            'current_player' => $currentPlayer,
            'board' => array_fill(0, 7, array_fill(0, 6, null)),
        ]);

        StartGame::dispatch($lobby);
    }
}
