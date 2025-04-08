// =====================
// Busca
// =====================
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResult = document.getElementById('search-result');

if (searchInput && searchButton && searchResult) {
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      searchResult.textContent = `Você buscou por: '${query}'`;
    } else {
      searchResult.textContent = 'Digite algo para buscar.';
    }
  });
}

// =====================
// Carrossel (Swiper)
// =====================
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
} else {
  console.warn('Swiper não está carregado.');
}

// =====================
// Dropdown (Menu de Categorias)
// =====================
const categorias = document.querySelectorAll('.nav-categorias');
const dropdown = document.getElementById('dropdownMenu');
let timeout;

if (categorias.length && dropdown) {
  categorias.forEach(item => {
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.style.display = 'flex';
    });

    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.style.display = 'none';
      }, 200);
    });
  });

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
}
