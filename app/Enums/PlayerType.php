<?php

namespace App\Enums;

enum PlayerType: string
{
    case HOST = 'host';
    case PEER = 'peer';
}

