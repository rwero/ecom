<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
use PHPUnit\Framework\MockObject\Stub\ReturnReference;

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
	$some_products = \App\Models\Product::with('images')->where('id' ,'<' ,'10')->get();
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
		'products' => $some_products
    ]);
	
})->name("home.index");

Route::get('/products', function () {
	
	
    return Inertia::render('AllProducts');
})->name('products.index');

Route::get('/products/{id}', function ($id){
	
	$product = \App\Models\Product::with('images')->with('allReviews.user')->findOrFail($id);
    return Inertia::render('Product', [
        'product'=>$product
    ]);
})->name('products.show');

Route::get("/u/account", [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('account.show');
Route::get("/u/orders", [UserController::class, 'orders'])->middleware(['auth', 'verified'])->name('orders.index');
Route::get("/u/newsletter", [UserController::class, 'newsletter'])->middleware(['auth', 'verified'])->name('newsletter.index');
Route::get("/u/reviews", [UserController::class, 'reviews'])->middleware(['auth', 'verified'])->name('account.reviews.index');
Route::get("/u/edit", [UserController::class, 'edit'])->middleware(['auth', 'verified'])->name('account.edit.show');
Route::get("/u/address-book", [UserController::class, 'addressBook'])->middleware(['auth', 'verified'])->name('address-book.index');

Route::get("/checkout", function(){
    return Inertia::render('Checkout');
})->middleware(['auth', 'verified'])->name('checkout.show');



Route::get('/cart',[CartController::class,'index'])->middleware(['auth', 'verified']);
Route::post('/cart', [CartController::class, 'store'])->middleware(['auth', 'verified']);;
Route::delete('/cart/{id}',[CartController::class, 'destroy'])->middleware(['auth', 'verified']);

Route::post("/purchase", [UserController::class, 'purchase'])->middleware(['auth', 'verified']);;

require __DIR__.'/auth.php';
