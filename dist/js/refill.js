const gameCsgo = document.querySelector('.selection__game--csgo');
const gameDota = document.querySelector('.selection__game--dota');

gameCsgo.addEventListener('click', function() {
    gameCsgo.classList.toggle('selection__edit');
})

gameDota.addEventListener('click', function() {
    gameDota.classList.toggle('selection__edit');
})