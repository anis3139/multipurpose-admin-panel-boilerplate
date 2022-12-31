<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Role\RolesController;
use App\Http\Controllers\User\ProfileController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/role', [RolesController::class, 'index'])->name('role.index');
    Route::get('/role/create', [RolesController::class, 'create'])->name('role.create');
    Route::post('/role/store', [RolesController::class, 'store'])->name('role.store');
    Route::get('/role/edit/{role}', [RolesController::class, 'edit'])->name('role.edit');
    Route::post('/role/update/{role}', [RolesController::class, 'update'])->name('role.update');
    Route::get('/role/{role}', [RolesController::class, 'show'])->name('role.show');
    Route::delete('/role/destroy/{role}', [RolesController::class, 'destroy'])->name('role.destroy');
    Route::resource('user', UserController::class, ['except' => ['update']]);
});

require __DIR__.'/auth.php';
