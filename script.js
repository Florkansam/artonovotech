const toggleMenu = document.getElementById('toggleMenu');
const nav = document.getElementById('navbar');
if (toggleMenu) {
  toggleMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}
const uploadForm = document.getElementById('uploadForm');
if (uploadForm) {
  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
    uploadForm.reset();
  });
}
