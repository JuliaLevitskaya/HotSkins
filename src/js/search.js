const search = document.querySelector('.exchange__search-engine');
const searchItems = document.querySelector('.search__items');

search.addEventListener('click', function() {
    searchItems.classList.toggle('show');
})