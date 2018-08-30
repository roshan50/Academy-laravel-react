<?php

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
Route::get('/course-detail', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('welcome');
});
Route::get('/profile', function () {
    return view('welcome');
});

Route::resource('courses', 'CourseController');
Route::get('/update_courses', function () {
    $courses = App\Course::orderBy('updated_at', 'desc')->take(3)->get();
    return response()->json($courses);
});

Route::resource('categories', 'CategoryController');