const train1 = document.getElementById('train1');
const train2 = document.getElementById('train2');

if (train1 && train2) {
      window.addEventListener('scroll', () => {
      const value = window.scrollY;

      train1.style.left = (value * 1.5) + 'px';
      train2.style.left = (1450 + value * -1.5) + 'px';
});
}

document.querySelectorAll('.copy-email').forEach((button) => {
      button.addEventListener('click', () => {
            const email = button.getAttribute('data-email');
            if (email) {
                  navigator.clipboard.writeText(email);
            }
      });
});

ScrollReveal().reveal('#home', {
    origin: 'left',
    duration: 2000,
    distance: '15%',
    reset: true
});

ScrollReveal().reveal('.project img', {
    origin: 'left',
    duration: 2000,
    distance: '15%',
    reset: true
});

ScrollReveal().reveal('.work', {
    distance: '50px',
    origin: 'right',
    duration: 1000,
    interval: 200,
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});
