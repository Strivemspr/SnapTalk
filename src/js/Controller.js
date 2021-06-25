// SCSS Webpack
import "../scss/main.scss";

// Background Images
import background from '../images/background.png';
const image = document.querySelector('.search');
image.style.backgroundImage = `url(${background})`;

// Preload
import { preload } from './utilities/preload';

// Dark Mode

window.addEventListener('load', function() {
    const isDark = JSON.parse(localStorage.getItem('isDark'));

    console.log(isDark)

    if(isDark) {
        document.body.classList.add("dark-mode");
        themeButton.querySelector('.fa-moon').dataset.prefix = 'far';
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