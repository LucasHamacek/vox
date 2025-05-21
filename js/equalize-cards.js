function equalizeServiceCards() {
  // Seleciona todos os cards de serviço dentro da seção #solucoes
  const grid = document.querySelector('#solucoes .grid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.flex.flex-col.group');

  // Reseta altura antes de medir
  cards.forEach(card => card.style.height = 'auto');

  // Calcula a maior altura
  let maxHeight = 0;
  cards.forEach(card => {
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight;
    }
  });

  // Aplica a maior altura a todos os cards
  cards.forEach(card => {
    card.style.height = maxHeight + 'px';
  });
}

// Roda ao carregar e ao redimensionar a janela
window.addEventListener('DOMContentLoaded', equalizeServiceCards);
window.addEventListener('resize', equalizeServiceCards);