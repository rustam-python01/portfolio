document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFilters();
});

function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const htmlTag = document.documentElement;
  
  const savedTheme = localStorage.getItem('site-theme') || 'dark';
  htmlTag.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('site-theme', newTheme);
  });
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}