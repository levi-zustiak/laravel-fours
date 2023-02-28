<?php

namespace App\Listeners;

use App\Events\Connected;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateGame
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Connected $event): void
    {
        $event->lobby->games()->create(['current_player_id' => $event->lobby->host_id]);
    }
}
