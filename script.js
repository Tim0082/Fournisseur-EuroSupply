document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const active = button.classList.contains('active');

    // Fermer tous les autres
    document.querySelectorAll('.accordion-header').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.accordion-content').forEach(content => {
      content.style.maxHeight = null;
      content.style.padding = '0 24px';
    });

    // Ouvrir celui cliqué
    if (!active) {
      button.classList.add('active');
      const content = button.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.padding = '20px 24px';
    }
  });
});
