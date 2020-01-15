import slick from 'slick-carousel'
import $ from 'jquery'
import "slick-carousel/slick/slick.css";

(function main() {
    $('.slider-wrapper').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
})();
