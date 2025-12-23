// navbar fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const buttonTop = document.querySelector('#button-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        buttonTop.classList.remove('hidden');
        buttonTop.classList.add('flex');
    } else{
        header.classList.remove('navbar-fixed');
        buttonTop.classList.remove('flex');
        buttonTop.classList.add('hidden');
    }
}

// Menu hambuger
const hambuger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hambuger.addEventListener('click', function(){
    hambuger.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    observer.observe(footer);
  });
  