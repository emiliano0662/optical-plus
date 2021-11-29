import './scss/style.scss';
import { Modal } from 'bootstrap';

import { WOW } from 'wowjs';

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

/*Se inicializa el plugin para las animaciones*/
var wow = new WOW({
    live: false,
    scrollContainer: null
});

//$('header').load("header.html");
//$('footer').load("footer.html");

$(document).on('click', '.bt-scrolltop', function (event) {
    event.preventDefault();

    var nav_menu = $(this).attr('href');

    $('html, body').animate({ scrollTop: $(nav_menu).offset().top }, 1000);
});

/*Se agregan las animaciones para toda la pagina que no cargan de menera recurrente*/
wow.init();