<?php

namespace App\Models;

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rule;
use Intervention\Image\Facades\Image;



class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function create()
    {
        return Inertia::render('CreatePost');
    }
    public function store()
    {
        $data = request()->validate([
            'caption' => 'required|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $imagePath = request('image')->store('uploads', 'public');

        $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200);
        $image->save();

        auth()->user()->posts()->create([
            'caption' => $data['caption'],
            'image' => $imagePath,
        ]);

        return redirect('/dashboard/' . auth()->user()->id);
    }

    public function show(\App\Models\Post $post)
    {
        return Inertia::render('ShowPost', compact('post'));
    }
}
