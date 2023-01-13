const buttonTwo = document.querySelector('.authorization__btn');


buttonTwo.addEventListener('click', function() {
    let k = document.querySelector('.authorization__input--email').value;
    let o = document.querySelector('.authorization__input--password').value;
    if (k, o == "") {
        alert("Необходимо ввести все данные");
        return false;
    }
})