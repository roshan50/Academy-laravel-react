<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>آکادمی | آموزش آنلاین برنامه نویسی</title>
    <link rel="icon" href="favicon.ico" type="image/gif" sizes="16x16">
    {{--<link rel="stylesheet" href="MaterialDesign-Webfont-master/css/materialdesignicons.min.css">--}}
    <link rel="stylesheet" href="mdi/font/css/materialdesignicons.min.css">
    {{--<link rel="stylesheet" href="./materialdesignicons2.min.css">--}}
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
<div id="root"></div>
{{--@stack('scripts')--}}
<script src="{{asset('js/app.js')}}" ></script>
</body>
</html>