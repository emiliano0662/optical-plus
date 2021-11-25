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

/*Se agregan las animaciones para toda la pagina que no cargan de menera recurrente*/
wow.init();