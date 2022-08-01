<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\AdminUser;

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

Route::group(["middleware" => "api"], function () {

    Route::get('/current_user', function () {
      return Auth::user();
    })->name('current_user');

    Route::namespace('Auth')->group(function() {
      Route::post('/login', 'LoginController@login')->name('login');
    });

    Route::post('/qiita', 'HomeController@qiita')->name('qiita');
  });

  Route::get('/hello', function() {
    return 'hello';
  });
