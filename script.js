fetch('articles.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('articlesContainer');
    container.innerHTML = '';
    data.forEach(article => {
      container.innerHTML += `
        <article>
          <h3>${article.categorie}</h3>
          <h4>${article.titre}</h4>
          <p>${article.texte}</p>
        </article>
      `;
    });
  });

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

