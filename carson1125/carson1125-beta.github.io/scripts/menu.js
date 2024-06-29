const menuButton = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  const target = event.target;
  if (!menu.contains(target) && !menuButton.contains(target)) {
    menu.classList.remove('open');
  }
});