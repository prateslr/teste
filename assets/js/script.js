/* Efeito de marcação de section */
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  let current = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
      }
  });
});
 
/* Rolagem menu */
window.addEventListener("scroll", function(){
    let nav = document.querySelector('#nav')
    nav.classList.toggle('rolagem', window.scrollY > 100)
})

/* Dark mode*/
function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('icon');
    const isDarkMode = body.classList.toggle('light');

    if (isDarkMode) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    };
};

/* Top Button */
window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById('scrollToTop').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

