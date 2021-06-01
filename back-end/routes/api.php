<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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


//  get all owner
Route::get('/all-owners','Api\AllOwnersController@index');
//  get all-posts
Route::get('/all-posts','Api\AllPostsController@index');
// gat all recommendposts
Route::get('/all-recommend-posts','Api\RecommendsPost@index');
//  get all type
Route::get('/all-types','Api\TypeController@index');
//  get post by id
Route::get('/post/{id}','Api\AllPostsController@show');
// get owner profile
Route::get('/owner-profile/{id}','Api\ProfileDetails@ownerProfile');

//  get recent post per owner
Route::get('/owner/recent-posts','Api\RecentPostPerOwner@index');
//  get active post per owner
Route::get('/owner/active-posts','Api\ActivePostPerOwner@index');
//  get disable post per owner
Route::get('/owner/disable-posts','Api\DisablePostPerOwner@index');
//  get all post per owner
Route::get('/owner/all-posts','Api\AllPostsPerOwner@index');
//  get profile details
Route::get('/user-profile','Api\ProfileDetails@index');
//  update profile
Route::post('/user-profile/update','Api\ProfileDetails@update');
//  add post
Route::post('/owner/add-post','Api\AllPostsPerOwner@store');
//  edit post
Route::post('/owner/edit-post/{id}','Api\AllPostsPerOwner@edit');
//  delete post
Route::post('/owner/delete-post/{id}','Api\AllPostsPerOwner@destroy');
//  get summary - admin author
Route::get('/admin/summary','Api\AdminManagerSummary@index');
//  get all-post - admin author
Route::get('/admin/all-posts','Api\AdminManagerPost@index');
//  get active-post - admin author
Route::get('/admin/active-posts','Api\AdminManagerPost@activePosts');
//  get all-post - admin author
Route::get('/admin/disabled-posts','Api\AdminManagerPost@disabledPosts');
//  get all-post - admin author
Route::get('/admin/waiting-posts','Api\AdminManagerPost@waitingPosts');
//  get all-owner - admin author
Route::get('/admin/all-owners','Api\AdminManagerOwner@index');
//  get all-reviews - admin author
Route::get('/admin/all-reviews','Api\AdminManagerReviews@index');
//  get recent-posts - admin author
Route::get('/admin/recent-posts','Api\AdminManagerPost@recentPosts');
// fliter
Route::post('/admin-active-post/{id}','Api\AdminManagerPost@AdminActivePost');
Route::post('/admin-disabled-post/{id}','Api\AdminManagerPost@AdminDisabledPost');
Route::post('/admin-recommend-post/{id}','Api\AdminManagerPost@AdminRecommendPost');
Route::post('/admin-no-recommend-post/{id}','Api\AdminManagerPost@adminNoRecommendPost');
// review
Route::post('/review','Api\ReviewsController@postReview');
Route::post('/like','Api\ReactController@addLike');
Route::post('/report','Api\ReactController@addReport');
Route::post('/favourite','Api\ReactController@addFavourite');
Route::post('/view-notice','Api\ProfileDetails@viewNotice');
Route::post('/pass-review','Api\ReviewController@passReview');
Route::post('/disabled-review','Api\ReviewController@disabledReview');


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', 'AuthController@register');
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/owner/login', [AuthController::class, 'loginAsOwner']);
    Route::post('/owner/register', 'AuthController@registerAsOwner');
    Route::post('/owner/logout', [AuthController::class, 'logoutAsOwner']);
    Route::post('/owner/refresh', [AuthController::class, 'refresh']);
    Route::get('/owner/user-profile', [AuthController::class, 'userProfile']);    
});
//  send messgae
Route::get('/send', 'SendMessageController@index')->name('send');
Route::post('/postMessage', 'SendMessageController@sendMessage')->name('postMessage');
Route::post('/getMessages', 'Api\Message@getMessages');
Route::post('/getConversations', 'Api\Message@getConversations');
//  summary
//  get summary per owner
Route::get('/owner/summary','Api\SummaryController@index');
