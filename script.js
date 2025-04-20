const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(item.dataset.section).classList.add('active');
  });
});