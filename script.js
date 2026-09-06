const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));

const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '☀' : '☾';
});

document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelector('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  window.location.href = `mailto:rishupandey@gmail.com?subject=${subject}&body=${body}`;
});
