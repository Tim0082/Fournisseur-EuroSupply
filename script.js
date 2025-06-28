document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');

    // Ferme tout
    document.querySelectorAll('.accordion-header').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.accordion-content').forEach(content => {
      content.style.maxHeight = null;
      content.style.padding = '0 24px';
    });

    // Ouvre si pas déjà actif
    if (!isActive) {
      button.classList.add('active');
      const content = button.nextElementSibling;
      if (content) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '20px 24px';
      }
    }
  });
});
