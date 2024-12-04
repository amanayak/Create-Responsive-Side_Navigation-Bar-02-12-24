const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggler');
const menuToggler = document.querySelector('.menu-toggler');


const collapsedSidebarHeight = '56px';
const fullSidebarHeight = 'calc(100vh - 32px)';

// Toggle sidebar's collapsed state

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}

// Toggler menu-active class and adjust height
menuToggler.addEventListener("click", () => {
    toggleMenu(sidebar.classList.toggle("menu-active"));
})

