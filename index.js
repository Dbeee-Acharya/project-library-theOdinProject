const addBookButton = document.querySelector('.add-book-button-main');
const addBookFormModal = document.querySelector('.add-book-form-modal');
const bookListSection = document.querySelector('.book-list-section');
const addBookSection = document.querySelector('.add-book-section');
const closeModalButton = document.querySelector('.close-modal-button');

addBookButton.addEventListener("click", ()=>{
    addBookFormModal.classList.toggle("active");
    bookListSection.classList.toggle("blur");
    addBookSection.classList.toggle('blur');
})

closeModalButton.addEventListener("click", ()=>{
    addBookFormModal.classList.toggle("active");
    bookListSection.classList.toggle("blur");
    addBookSection.classList.toggle('blur');
})