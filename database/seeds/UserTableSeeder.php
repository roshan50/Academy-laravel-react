<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 5)->create();
//        factory(App\Member::class, 10)->create();
//        factory(App\Course::class, 10)->create();
        factory(App\Lesson::class, 50)->create();
    }
}
