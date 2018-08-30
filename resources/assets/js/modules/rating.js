console.log('rating');
//..rating functions...........................
var $star_rating = $('.star-rating .mdi');

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('mdi-star-outline').addClass('mdi-star');
        } else {
            return $(this).removeClass('mdi-star').addClass('mdi-star-outline');
        }
    });
};

$star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {});