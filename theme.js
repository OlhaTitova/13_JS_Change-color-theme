'use strict';


let btn = document.querySelector('.theme-button');
let link = document.querySelector('#theme-link');

btn.addEventListener('click', () => { changeTheme() });

function changeTheme() {
    let orangeTheme = './css/theme.css';
    let noTheme = '';

    let currTheme = link.getAttribute('href');
    let theme = '';

    if (currTheme === orangeTheme) {
        currTheme = noTheme;
        theme = '';
    } else {
        currTheme = orangeTheme;
        theme = 'theme';
    }

    link.setAttribute('href', currTheme);

    theme = localStorage.getItem('theme');
    localStorage.setItem('theme', currTheme);


}


