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
  const speed = 150;
  const maquinaEscrever = document.getElementById('maquinaEscrever');

  maquinaEscrever.textContent = ''; 

  function digitar() {
    if(i < text.length){
      maquinaEscrever.textContent += text.charAt(i);
      i++;
      setTimeout(digitar, speed);
    }
  }

  digitar();

  const btnVerMais = document.querySelectorAll('.ver-mais-btn');

  btnVerMais.forEach((botao) => {
    botao.addEventListener('click', () => {
      const card = botao.closest('.card-pj');
      card.classList.toggle('ativo');

      botao.textContent = card.classList.contains('ativo') ? 'Ver menos' : 'Ver mais';
    });
  });
});


