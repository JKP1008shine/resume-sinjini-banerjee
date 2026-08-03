const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  if (localStorage.getItem('theme') === 'day') {
    document.body.classList.add('day');
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('day');
    localStorage.setItem('theme', document.body.classList.contains('day') ? 'day' : 'night');
  });
}
