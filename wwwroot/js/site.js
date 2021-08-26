// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.addEventListener('scroll', function () {
    let nav = document.querySelector('.navbar__about');
    windowPosition = window.scrollY > 50

    nav.classList.toggle('scrolling-active', windowPosition);
})

//Get the button:
mybutton = document.querySelector(".top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "inline";
    } else {
        mybutton.style.display = "none";
    }
}