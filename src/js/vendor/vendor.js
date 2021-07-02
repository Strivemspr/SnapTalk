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
    perMove: 1,
    gap: '15px',
    drag: true,
    pauseOnHover: true,
    focus: false,
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
            gap: '10px',
            perPage: 1,
            height: '8rem',
            fixedWidth: '8rem',
        }
	}
}).mount();