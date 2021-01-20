// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNev = document.querySelector('.menu-nav');
const menuBranging = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNev.classList.add('show');
        menuBranging.classList.add('show');
        navItems.forEach(item=> item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNev.classList.remove('show');
        menuBranging.classList.remove('show');
        navItems.forEach(item=> item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}