      const train1 = document.getElementById('train1');
      const train2 = document.getElementById('train2');

      window.addEventListener('scroll', () => {
      const value = window.scrollY;
      
      train1.style.left = (value * 1.5) + 'px';
      train2.style.left = (1450 + value * -1.5) + 'px';
});


ScrollReveal().reveal('#home', {
    origin: 'left',
    duration: 2000,
    distance: '15%',
    
});

ScrollReveal().reveal('#aboutme #project1 img', {
    origin: 'left',
    duration: 2000,
    distance: '15%',
    
});

ScrollReveal().reveal('#aboutme #project2 img', {
    origin: 'left',
    duration: 2000,
    distance: '15%',
    
});