const headerButton = document.querySelector('.header__button');
const header = document.querySelector('.header');

headerButton.addEventListener('click', () => {
    if (header.classList.contains('modal-open')){
        header.classList.remove('modal-open');
        return;
    }
        header.classList.add('modal-open')
});