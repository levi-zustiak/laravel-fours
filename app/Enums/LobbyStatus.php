<?php

namespace App\Enums;

enum LobbyStatus: string
{
    case PENDING = 'pending';
    case CONNECTED = 'connected';
    case DISCONNECTED = 'disconnected';
}
