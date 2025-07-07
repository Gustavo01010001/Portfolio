
const btn = document.getElementById('darkModeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark', document.body.classList.contains('dark-mode'));
});
if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('dark-mode');
}
document.querySelectorAll('a[href$=".html"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.page-transition').style.animation = 'fadeIn 0.5s forwards';
    const href = a.getAttribute('href');
    setTimeout(() => location.href = href, 500);
  });
});
