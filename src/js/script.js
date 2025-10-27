document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinksList = navLinks.querySelectorAll('a');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Fecha o menu quando um link é clicado (útil para navegação de página única)
  navLinksList.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Fecha todos os outros itens FAQ
      const activeItem = document.querySelector('.faq-item.active');
      if (activeItem && activeItem !== item) {
        activeItem.classList.remove('active');
      }

      // Alterna a classe 'active' no item clicado
      item.classList.toggle('active');
    });
  });

  // --- Hero Section Animation ---
  const notesContainer = document.querySelector('.notes-container');
  const notes = ['🎵', '🎶', '🎼', '🎸', '🎹', '🎺'];

  function createNote() {
    const note = document.createElement('span');
    note.classList.add('note');
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    const size = Math.random() * 20 + 15;
    note.style.fontSize = `${size}px`;
    note.style.left = `${Math.random() * 100}vw`;
    note.style.animationDuration = `${Math.random() * 5 + 5}s`;
    note.style.opacity = '0';
    
    notesContainer.appendChild(note);

    // Remove o elemento após a animação para não sobrecarregar o DOM
    note.addEventListener('animationend', () => {
      note.remove();
    });
  }

  // Cria uma nova nota a cada 500ms
  setInterval(createNote, 500);

});