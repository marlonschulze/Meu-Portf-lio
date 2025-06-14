document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navBar = document.getElementById('navBar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('show');  
  });

  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navBar.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });

  // Máquina escrever
  const text = "Marlon Schulze";
  let i = 0;

  function digitar() {
    if(i < text.length){
      document.getElementById('maquinaEscrever').textContent += text.charAt(i);
      i++;
      setTimeout(digitar, 150);
    }
  }

  digitar();
});



