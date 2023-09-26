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
        $first = (bool)random_int(0, 1);

        $player_one = $first ? $lobby->host_id : $lobby->peer_id;
        $player_two = $first ? $lobby->peer_id : $lobby->host_id;

        $game = $lobby->game()->create([
            'player_one' => $player_one,
            'player_two' => $player_two,
            'current_player' => $player_one,
            'board' => array_fill(0, 7, array_fill(0, 6, null)),
        ]);

        StartGame::dispatch($lobby, $game);
    }
}
