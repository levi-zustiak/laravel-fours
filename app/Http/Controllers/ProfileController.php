<?php

namespace App\Http\Controllers;

use App\Http\Resources\InertiaResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Profile/Index', [
            'user' => new InertiaResource($request->user())
        ]);
    }
}
