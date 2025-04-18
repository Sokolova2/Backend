<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SubscriberController;
use App\Http\Controllers\Api\SubscriptionController;

/**
 * @OA\Info(
 *     title="Laravel API",
 *     version="1.0.0",
 *     description="Документація для API"
 * )
 */
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('subscribers', SubscriberController::class);
Route::resource('subscriptions', SubscriptionController::class);
