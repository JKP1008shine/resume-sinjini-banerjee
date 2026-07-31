const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  if (localStorage.getItem('theme') === 'day') {
    document.body.classList.add('day');
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('day');
    localStorage.setItem('theme', document.body.classList.contains('day') ? 'day' : 'night');
  });
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    themeToggle.style.opacity = (y > lastScrollY && y > 60) ? '0' : '1';
    lastScrollY = y;
  });
}
