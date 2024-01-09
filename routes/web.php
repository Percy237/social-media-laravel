<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard/{user}', [ProfilesController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.show');
Route::get('/p/create', [PostController::class, 'create']);
Route::post('/p', [PostController::class, 'store'])->name("p");
Route::get('/profile/{post}', [PostController::class, 'show'])->name("post.show");
Route::get('/profile/{user}/edit', [ProfilesController::class, 'edit'])->name("profile.edit");
Route::patch('/profile/{user}', [ProfilesController::class, 'update'])->name('profile.update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
