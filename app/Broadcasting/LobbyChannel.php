<?php

namespace App\Broadcasting;

use App\Models\Lobby;
use App\Models\User;

class LobbyChannel
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     */
    public function join(User $user, Lobby $lobby): array|bool
    {
        if ($user->available()) {
            return ['id' => $user->id, 'name' => $user->name];
        }
    }
}
