// const gameCsgo = document.querySelector('.selection__game--csgo');
// const gameDota = document.querySelector('.selection__game--dota');
// const exchangeDota = document.querySelector('.items-exchange--dota');
// const exchangeCsgo = document.querySelector('.items-exchange--csgo');
// const selections = document.querySelectorAll('.selection__games[data-id]');

// gameCsgo.addEventListener('click', function() {
//     gameCsgo.classList.toggle('selection__edit');
//     exchangeCsgo.classList.toggle('show');
//     exchangeDota.classList.toggle('unshow');
// })

// gameDota.addEventListener('click', function() {
//     gameDota.classList.toggle('selection__edit');
//     exchangeDota.classList.toggle('show');
//     exchangeCsgo.classList.toggle('unshow');
// })



// selections.forEach(selections => {
//     const dataId = selections.getAttribute('data-id');
//     selections.addEventListener('click', () => {
//         setActiveButton(dataId);
//         setContentBlockInner(dataId);
//     });
// });

// function setContentBlockInner(dataId) {
//     const active = document.querySelector('.items-exchange--active');
//     const fieldToBeActive = document.querySelector(`.items-exchange[data-id="${dataId}"]`);

//     if (active) {
//         active.classList.remove('items-exchange--active');
//     }

//     if (fieldToBeActive) {
//         fieldToBeActive.classList.add('items-exchange--active');
//     }
// }

// function setActiveButton(dataId) {
//     const active = document.querySelector('.selection__game--active');
//     const fieldToBeActive = document.querySelector(`.selection__games[data-id="${dataId}"]`);

//     if (active) {
//         active.classList.remove('selection__game--active');
//     }

//     if (fieldToBeActive) {
//         fieldToBeActive.classList.add('selection__game--active');
//     }
// }