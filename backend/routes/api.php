<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\MosqueController;


Route::group([
    'prefix' => 'v1'
    ], function () {

        // User
        Route::post('/register', [CustomerController::class, 'register']);
        Route::post('/login', [CustomerController::class, 'login']);

        // Mosque - user
        Route::post('/mosqueCreate', [MosqueController::class, 'mosqueCreate']);
        Route::post('/mosqueList', [MosqueController::class, 'mosqueList']);
        Route::post('/mosqueDelete', [MosqueController::class, 'mosqueDelete']);


        // Mosque - all guestuser
        Route::post('/mosqueListGuestuser', [MosqueController::class, 'mosqueListGuestuser']);
});
