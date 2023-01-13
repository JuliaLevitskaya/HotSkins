const button = document.querySelector('.request__btn');

button.addEventListener('click', function() {
    let x = document.querySelector('.authorization__register--name').value;
    let y = document.querySelector('.authorization__register--email').value;
    let j = document.querySelector('.authorization__register--adress').value;
    if (x, y, j == "") {
        alert("Необходимо ввести все данные");
        return false;
    }
});