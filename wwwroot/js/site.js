// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.addEventListener('scroll', function () {
    let nav = document.querySelector('.navbar__about');
    windowPosition = window.scrollY > 50

    nav.classList.toggle('scrolling-active', windowPosition);
})