// Font Awesome Webpack
import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/brands"

// Gallery Splide
import Splide from '@splidejs/splide';

new Splide( '.splide', {
    type: 'slide',
	perPage: 5,
    // speed: 300,
    // easing: 'ease-in',
    drag: true,
    perMove: 1,
    gap: '15px',
    pagination: false,
    lazyLoad: 'sequential',
    classes: {
		arrows: 'splide__arrows slider__arrows',
		arrow : 'splide__arrow slider__arrow',
		prev  : 'splide__arrow--prev slider__arrow--prev',
		next  : 'splide__arrow--next slider__arrow--next',
	},
    breakpoints: {
		1450: {
			perPage: 4,
		},
        600: {
            perPage: 5,
            fixedWidth: '8rem',
            fixedHeight: '8rem',
        }
	}
}).mount();