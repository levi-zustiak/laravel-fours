<?php

namespace App\Policies;

use App\Models\Lobby;
use App\Models\User;

class LobbyPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Lobby $lobby): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        abort(403, 'Error caused');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Lobby $lobby): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Lobby $lobby): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Lobby $lobby): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Lobby $lobby): bool
    {
        //
    }
}
