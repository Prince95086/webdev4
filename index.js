// Selecting DOM elements
let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let rightNav = document.querySelector('.rightNav');

// Adding the click event listener to toggle the class
burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp'); // Assuming 'h-nav-resp' for horizontal responsive layout
});
