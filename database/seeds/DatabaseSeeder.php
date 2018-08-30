<?php

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('members')->insert([
            'name' => 'حسین محمد زاده',
            'email' => 'Hossein.mhmd@gmail.com',
            'teacher' => 1,
            'credit' => 125000,
            'like' => 62,
            'vote' => 58,
            'achivment' => 1,
            'medal' => 5,
            'img' => 'author.png'
        ]);
        //...........................................................
        DB::table('categories')->insert([
            'name' => 'Android',
            'color' => '4bb769',
            'icon' => 'android',
        ]);
        DB::table('categories')->insert([
            'name' => 'Rubby',
            'color' => 'e8525b',
            'icon' => 'diamond',
        ]);
        DB::table('categories')->insert([
            'name' => 'Python',
            'color' => 'f690ae',
            'icon' => 'language-python',
        ]);
        DB::table('categories')->insert([
            'name' => 'Java Script',
            'color' => '009577',
            'icon' => 'language-javascript',
        ]);
        DB::table('categories')->insert([
            'name' => 'Css',
            'color' => 'a24e7f',
            'icon' => 'language-css3',
        ]);
        DB::table('categories')->insert([
            'name' => 'PHP',
            'color' => '24accc',
            'icon' => 'language-php',
        ]);
        //............................................................
        DB::table('courses')->insert([
            'title' => 'آموزش Java Script',
            'description' => 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. ',
            'cost' => '365000',
            'steps' => '4',
            'question_count' => '12',
            'teacher_id' => '1',
            'color'=>'62798e',
            'icon' => 'language-javascript'
        ]);
        DB::table('courses')->insert([
            'title' => 'آموزش Laravel',
            'description' => 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
            'cost' => '365000',
            'steps' => '4',
            'question_count' => '12',
            'teacher_id' => '1',
            'color'=>'838bc1',
            'icon' => 'laravel'
        ]);
        DB::table('courses')->insert([
            'title' => 'آموزش PHP',
            'description' => 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
            'cost' => '365000',
            'steps' => '4',
            'question_count' => '12',
            'teacher_id' => '1',
            'color'=>'7f6699',
            'icon' => 'language-php'
        ]);
        DB::table('courses')->insert([
            'title' => 'آموزش مقدماتی C#',
            'description' => 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
            'cost' => '365000',
            'steps' => '4',
            'question_count' => '12',
            'teacher_id' => '1',
            'color'=>'f1763d',
            'icon' => 'C#'
        ]);
        DB::table('courses')->insert([
            'title' => 'آموزش مقدماتی پایگاه داده',
            'description' => 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
            'cost' => '365000',
            'steps' => '4',
            'question_count' => '12',
            'teacher_id' => '1',
            'color'=>'f1763d',
            'icon' => 'database'
        ]);
        DB::table('courses')->insert([
            'title' => 'آموزش مقدماتی اندروید',
            'description' => 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. ',
            'cost' => '365000',
            'steps' => '4',
            'question_count' => '12',
            'teacher_id' => '1',
            'color'=>'4bb769',
            'icon' => 'android'
        ]);
        DB::table('courses')->insert([
            'title' => 'آموزش مقدماتی فتوشاپ',
            'description' => 'طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. ',
            'cost' => '365000',
            'steps' => '4',
            'question_count' => '12',
            'teacher_id' => '1',
            'color'=>'3a5ea5',
            'icon' => 'google-photos'
        ]);
        //..............................................................
        DB::table('buys')->insert([
            'course_id' => 1,
            'member_id' => 1,
            'status' => 6,
            'passed_steps' => 2,
        ]);
        DB::table('buys')->insert([
            'course_id' => 7,
            'member_id' => 1,
            'status' => 6,
            'passed_steps' => 1,
        ]);
        DB::table('buys')->insert([
            'course_id' => 4,
            'member_id' => 1,
            'status' => 6,
            'passed_steps' => 4,
        ]);
        DB::table('buys')->insert([
            'course_id' => 5,
            'member_id' => 1,
            'status' => 6,
            'passed_steps' => 2,
        ]);
        DB::table('buys')->insert([
            'course_id' => 6,
            'member_id' => 1,
            'status' => 6,
            'passed_steps' => 3,
        ]);
        //..............................................................
         $this->call(UserTableSeeder::class);
    }
}
