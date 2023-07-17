<?php

namespace App\Observers;

use App\Enums\LobbyStatus;
use App\Models\Lobby;

class LobbyObserver
{
    public function creating(Lobby $lobby): void
    {
        $lobby->status = LobbyStatus::PENDING;
    }

    /**
     * Handle the Lobby "created" event.
     */
    public function created(Lobby $lobby): void
    {
        //
    }

    public function updating(Lobby $lobby): void
    {
        if ($lobby->isDirty('peer_id')) {
            if ($lobby->host_id && $lobby->peer_id) {
                $lobby->status = LobbyStatus::CONNECTED;
            }
        }
    }

    /**
     * Handle the Lobby "updated" event.
     */
    public function updated(Lobby $lobby): void
    {
        if ($lobby->host_id && $lobby->peer_id) {
            if ($lobby->wasChanged('status')) {
                if ($lobby->status === LobbyStatus::CONNECTED) {
//                    Connected::dispatch($lobby);
                }
            }
        }
    }

    /**
     * Handle the Lobby "deleted" event.
     */
    public function deleted(Lobby $lobby): void
    {
        //
    }

    /**
     * Handle the Lobby "restored" event.
     */
    public function restored(Lobby $lobby): void
    {
        //
    }

    /**
     * Handle the Lobby "force deleted" event.
     */
    public function forceDeleted(Lobby $lobby): void
    {
        //
    }
}
