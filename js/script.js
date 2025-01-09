const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const largeBtn = document.querySelector('.btn.primary.large');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');


  // Check if the mobile menu is open
if (mobileMenu.classList.contains('open')) {
  largeBtn.style.display = 'none'; // Hide the button
} else {
  largeBtn.style.display = 'block'; // Show the button
}
});

