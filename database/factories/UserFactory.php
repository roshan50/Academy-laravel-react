<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});
$factory->define(App\Member::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'teacher' => rand(0,1),
        'credit' => rand(0,10000),
        'like' => rand(0,100),
        'vote' => rand(0,100),
        'achivment' => rand(1,5),
        'medal' => rand(1,5),
    ];
});
$factory->define(App\Course::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'description' => $faker->text,
        'cost' => rand(1000,10000),
        'steps' => rand(1,10),
        'question_count' => rand(1,10),
        'teacher_id' => rand(1,5),
    ];
});
$factory->define(App\Lesson::class, function (Faker $faker) {
    $course_id =  App\Course::pluck('id');
    return [
        'title' => $faker->name,
        'time' => $faker->time(),
        'course_id' => $course_id [rand(0,count($course_id)-1)],
    ];
});
$factory->define(App\Buy::class, function () {
    $course_id =  App\Course::pluck('id');
    $member_id =  App\Member::pluck('id');
    static $status = ['انتظار پرداخت','در حال آموزش','تکمیل شده'];
    return [
        'member_id' => $member_id [rand(0,count($member_id)-1)],
        'course_id' => $course_id [rand(0,count($course_id)-1)],
        'status' => $status [rand(0,count($status)-1)],
        'passed_steps' => rand(1,5),
    ];
});


