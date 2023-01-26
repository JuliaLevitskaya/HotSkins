const selections = document.querySelectorAll('.selection__game[data-id]');
const selectionCsgo = document.querySelector('.items-exchange--csgo');
const selectionDota = document.querySelector('.items-exchange--dota');
const buttonCsgo = document.querySelector('.selection__game--csgo');
const buttonDota = document.querySelector('.selection__game--dota');

selections.forEach(selection => {
    const dataId = selection.getAttribute('data-id');
    selection.addEventListener('click', () => {
        setActiveButton(dataId);
        setContentBlockInner(dataId);
    });
});

function setActiveButton(dataId) {
    const active = document.querySelector('.selection__game--active');
    const fieldToBeActive = document.querySelector(`.selection__game[data-id="${dataId}"]`);

    if (active) {
        active.classList.remove('selection__game--active');
    }

    if (fieldToBeActive) {
        fieldToBeActive.classList.add('selection__game--active');
    }
}

function setContentBlockInner(dataId) {
    const active = document.querySelector('.items-exchange--active');
    const fieldToBeActive = document.querySelector(`.items-exchange[data-id="${dataId}"]`);

    if (active) {
        active.classList.remove('items-exchange--active');
    }

    if (fieldToBeActive) {
        fieldToBeActive.classList.add('items-exchange--active');
    }

}