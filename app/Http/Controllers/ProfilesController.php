<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProfilesController extends Controller
{
    public function index($user)
    {
        $user = User::with('profile', "posts")->findOrFail($user);
        return Inertia::render('Dashboard', ['user' => $user]);
    }
}
