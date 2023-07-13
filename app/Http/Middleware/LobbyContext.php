<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class LobbyContext extends Middleware
{
    public function share(Request $request): array
    {
        dd($request->route('lobby'));
        return array_merge(parent::share($request), []);
    }
}
