<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});
Route::get('/category', 'Api\CategoryController@index');
Route::get('/category/filter', 'Api\CategoryTest@index');
Route::get('/category/create', 'Api\CategoryController@create');
Route::post('/category/store', 'Api\CategoryController@store')->name('form.store');
Route::get('/upload', 'UploadController@create');
Route::post('/postUpload', 'UploadController@store')->name('form.postUpload');
// Route::post('/all-renters/store','Api\AllRentersController@store');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
