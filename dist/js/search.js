const search = document.querySelector('.exchange__search-engine');
const searchItems = document.querySelector('.search__items');

search.addEventListener('click', function() {
    searchItems.classList.toggle('show');
})

window.onload = () => {
    let input = document.querySelector('.exchange__search-engine');
    input.oninput = function() {
        let value = this.value.trim();
        let list = document.querySelectorAll('.search__item .search__item-descr');
        const searchImg = document.querySelector('.search__item .search__item-img');

        if (value != '') {
            list.forEach(elem => {
                if (elem.innerText.search(value) == -1) {
                    elem.classList.add('hide');
                    searchImg.classList.add('hide');
                }
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove('hide');
                searchImg.classList.remove('hide');
            })
        }
        console.log(this.value);
    }
}