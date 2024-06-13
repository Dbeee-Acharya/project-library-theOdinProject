const addBookButton = document.querySelector('.add-book-button-main');
const addBookFormModal = document.querySelector('.add-book-form-modal');
const bookListSection = document.querySelector('.book-list-section');
const addBookSection = document.querySelector('.add-book-section');
const closeModalButton = document.querySelector('.close-modal-button');

let booksList = []

for (let i=0; i < 5; i++) {
    let book = new Book("test", "test", 100);
    booksList.push(book);
}

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


//constructor for Book object
function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

const createBookCard = (book, index) => {
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const removeBookButton = document.createElement('button');

    removeBookButton.addEventListener('click', ()=> {
        removeBook(removeBookButton);
    })

    bookCard.classList.add('book');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    removeBookButton.classList.add('delete-button');

    removeBookButton.setAttribute('id', index);

    bookTitle.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookPages.textContent = `${book.pages} pages`;
    removeBookButton.textContent = 'Remove';

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(removeBookButton);
    bookListSection.appendChild(bookCard); 
}

const populateBookSection = () => {
    clearBookSection();
    booksList.forEach((book, index) => {
        createBookCard(book, index)
    });
}

const clearBookSection = () => {
    const bookListSection = document.querySelector('.book-list-section');
    while(bookListSection.firstChild) {
        bookListSection.removeChild(bookListSection.firstChild);
    }
}

const removeBook = (button) => {
    const index = button.id;
    booksList.splice(index,1);
    populateBookSection()
}  

populateBookSection();
 

