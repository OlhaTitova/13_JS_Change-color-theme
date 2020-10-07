'use strict';


let btn = document.querySelector('.theme-button');
let link = document.querySelector('#theme-link');

btn.addEventListener('click', () => { changeTheme() });

function changeTheme() {


    let newTheme = './css/theme.css';
    let noTheme = '';

    let currTheme = link.getAttribute('href');
    let theme = '';

    let themeLS = localStorage.getItem('theme');
    localStorage.setItem('theme', newTheme);


    if (themeLS !== null && currTheme === newTheme) {
        currTheme = noTheme;
        theme = '';
        localStorage.removeItem('theme');

    } else {
        currTheme = newTheme;
        theme = 'theme';
        localStorage.setItem('theme', newTheme);

    }

    link.setAttribute('href', currTheme);



}


