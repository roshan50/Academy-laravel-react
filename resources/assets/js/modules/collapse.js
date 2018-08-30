console.log('collapse');
var $collapse = $('.level__header');
$collapse.on('click', function() {
    console.log($(this).find('.mdi').attr('class'));
    if($(this).find('.mdi').attr('class') == "mdi mdi-menu-up-outline")
        $(this).find('.mdi-menu-up-outline').removeClass('mdi-menu-up-outline').addClass('mdi-menu-down-outline');
    else if($(this).find('.mdi').attr('class') == "mdi mdi-menu-down-outline")
        $(this).find('.mdi-menu-down-outline').removeClass('mdi-menu-down-outline').addClass('mdi-menu-up-outline');
    console.log($(this).find('.mdi').attr('class'));
    console.log('---------------------------------');
});