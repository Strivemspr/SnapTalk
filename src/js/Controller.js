// SCSS Webpack
import "../scss/main.scss";

// Background Images
import background from '../images/background.png';
const image = document.querySelector('.search');
image.style.backgroundImage = `url(${background})`;

// Preload
import { preload } from './utilities/preload';

// Animation Stopper
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
});

window.addEventListener('resize', function() {
    document.body.querySelector('.animated-on-load').classList.remove("animated-on-load");
})

// Accordions
const favoritesNav = document.querySelector('.nav-favorites');
const buttonFavorites = document.querySelector('.icon-favorites');

buttonFavorites.addEventListener('click', function() {
    favoritesNav.classList.toggle('active');
})

const eventsNav = document.querySelector('.nav-events');
const buttonEvents = document.querySelector('.icon-events');

buttonEvents.addEventListener('click', function() {
    eventsNav.classList.toggle('active');
})

// Menu
const menuButton = document.querySelector('.icon-menu');
const leftSideBar = document.querySelector('.left-sidebar');
const modal = document.querySelector('.modal');

menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    leftSideBar.classList.toggle('active');
    modal.classList.toggle('active')
})

modal.addEventListener('click', function() {
    leftSideBar.classList.remove('active');
    modal.classList.remove('active');
})

// Dark Mode
window.addEventListener('load', function() {
    const isDark = JSON.parse(localStorage.getItem('isDark'));

    console.log(isDark)

    if(isDark) {
        document.body.classList.add("dark-mode");
        themeButton.querySelector('.fa-moon').dataset.prefix = 'fas';
    }
})

const themeButton = document.querySelector('.dark-light');

themeButton.addEventListener('click', function(e) {
    document.body.classList.toggle("dark-mode");

    const icon = themeButton.querySelector('.fa-moon');

    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem("isDark", true);
        console.log(icon.dataset.prefix = 'fas');
    } else {
        console.log(icon.dataset.prefix = 'far');
        localStorage.setItem("isDark", false);
    }

})

// Initialization Function
function init() {
    preload();
}

init();