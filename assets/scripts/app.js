const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovileButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' || 
        imageUrlValue.trim() === '' || 
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 to 5)');
        return;
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
};

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovileButton.addEventListener('click', addMovieHandler);

//https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80