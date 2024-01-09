<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Intervention\Image\Facades\Image;


class ProfilesController extends Controller
{
    public function index($user)
    {
        $user = User::with('profile', "posts")->findOrFail($user);
        return Inertia::render('Dashboard', ['user' => $user]);
    }

    public function edit($user)
    {

        $user = User::with('profile', "posts")->findOrFail($user);
        //$this->authorize('update', $user->profile);
        return Inertia::render('EditProfile', ['user' => $user]);
    }

    public function update(User $user)
    {
        $data = request()->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'url' => 'nullable|url',
        ]);

        if ($user->profile) {
            $user->profile->update($data);
        } else {
            $user->profile()->create($data);
        }

        return redirect('/dashboard/' . auth()->user()->id);
    }
}
