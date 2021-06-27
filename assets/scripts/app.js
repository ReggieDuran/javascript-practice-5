const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
