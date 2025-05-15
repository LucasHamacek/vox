  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  // Abre o menu
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-full');
    mobileMenu.classList.add('translate-y-0');
    document.body.style.overflow = 'hidden';
  });

  // Fecha o menu (botão X)
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-0');
    mobileMenu.classList.add('translate-y-full');
    document.body.style.overflow = '';
  });

  // Fecha o menu ao clicar em qualquer link interno (âncora)
  mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-y-0');
      mobileMenu.classList.add('translate-y-full');
      document.body.style.overflow = '';
      // A rolagem suave acontece via CSS (scroll-behavior: smooth)
    });
  });