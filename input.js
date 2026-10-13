window.MURUQ = window.MURUQ || {};
window.MURUQ.searchTerm = '';
window.MURUQ.activeFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('searchInput');
  const form = document.getElementById('searchForm');
  const clear = document.getElementById('clearSearch');
  const buttons = Array.from(document.querySelectorAll('[data-filter]'));
  const reset = document.getElementById('resetButton');

  function applyFilter(value) {
    window.MURUQ.activeFilter = value;
    buttons.forEach(button => button.classList.toggle('active', button.dataset.filter === value));
    if (typeof window.MURUQ.renderCatalog === 'function') window.MURUQ.renderCatalog();
  }
  window.MURUQ.setFilter = applyFilter;

  if (search) search.addEventListener('input', () => {
    window.MURUQ.searchTerm = search.value;
    if (typeof window.MURUQ.renderCatalog === 'function') window.MURUQ.renderCatalog();
  });
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    window.MURUQ.searchTerm = search ? search.value : '';
    if (typeof window.MURUQ.renderCatalog === 'function') window.MURUQ.renderCatalog();
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  if (clear && search) clear.addEventListener('click', () => {
    search.value = '';
    window.MURUQ.searchTerm = '';
    search.focus();
    if (typeof window.MURUQ.renderCatalog === 'function') window.MURUQ.renderCatalog();
  });
  buttons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter || 'all')));
  if (reset) reset.addEventListener('click', () => {
    if (search) search.value = '';
    window.MURUQ.searchTerm = '';
    applyFilter('all');
  });
  document.querySelectorAll('[data-filter-link]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    applyFilter(link.dataset.filterLink);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
});
