'use strict';

document.body.onload = () => {

    document.documentElement.setAttribute('theme', localStorage.getItem('theme'));


    const toggleBtn = document.querySelector('#toggle-theme');
    console.log(toggleBtn);

    toggleBtn.addEventListener('click', e => {

        if (localStorage.getItem('theme') !== null) {
            localStorage.removeItem('theme');
            document.documentElement.removeAttribute('theme');

        } else {
            localStorage.setItem('theme', 'orange-theme');
            document.documentElement.setAttribute('theme', 'orange-theme');
        }

    });
}
