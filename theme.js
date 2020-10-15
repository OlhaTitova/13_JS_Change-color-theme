'use strict';

document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));

document.body.onload = () => {

    const toggleBtn = document.querySelector('#toggle-theme');

    toggleBtn.addEventListener('click', e => {

        if (localStorage.getItem('theme') !== null) {
            localStorage.removeItem('theme');
            document.documentElement.removeAttribute('data-theme');

        } else {
            localStorage.setItem('theme', 'orange-theme');
            document.documentElement.setAttribute('data-theme', 'orange-theme');
        }

    });
}
