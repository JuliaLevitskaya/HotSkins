const languageRu = document.querySelector('.header__language_item');
const languageUa = document.querySelector('.header__language--ua');

languageUa.addEventListener('click', function() {
    languageRu.classList.toggle('show');
});