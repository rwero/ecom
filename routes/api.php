<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});

Route::get('/products', function () {
    $products = \App\Models\Product::with(["images"=>function ($query){
        $query->where('is_primary',1);

    }])->where('id', '>', request()->id)->limit(15)->get();

	return response()->json($data = $products);
});

Route::get('/search', function () {
    $products = \App\Models\Product::with(["images"=>function ($query){
        $query->where('is_primary',1);

    }])->where('id', '>', request()->id)->where("title","like","%".request()->query("q")."%")->limit(15)->get();

	return response()->json($data = $products);
});



