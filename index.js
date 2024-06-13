const addBookButton = document.querySelector('.add-book-button-main');
const addBookFormModal = document.querySelector('.add-book-form-modal');
const bookListSection = document.querySelector('.book-list-section');
const addBookSection = document.querySelector('.add-book-section');
const closeModalButton = document.querySelector('.close-modal-button');
const addBookFormId = document.getElementById('add-book-form-id');

let booksList = []

addBookButton.addEventListener("click", ()=>{
    addBookFormModal.classList.toggle("active");
    bookListSection.classList.toggle("blur");
    addBookSection.classList.toggle('blur');
})

closeModalButton.addEventListener("click", ()=>{
    addBookFormModal.classList.toggle("active");
    bookListSection.classList.toggle("blur");
    addBookSection.classList.toggle('blur');
    clearFormInput();
})


//constructor for Book object
function Book(name, author, pages, pagesRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
}

const createBookCard = (book, index) => {
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const pagesRead = document.createElement('p');
    const removeBookButton = document.createElement('button');

    removeBookButton.addEventListener('click', ()=> {
        removeBook(removeBookButton);
    })

    bookCard.classList.add('book');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    pagesRead.classList.add('pages-read');
    removeBookButton.classList.add('delete-button');

    removeBookButton.setAttribute('id', index);

    bookTitle.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookPages.textContent = `${book.pages} pages`;
    pagesRead.textContent = `Pages Read: ${book.pagesRead}`;
    removeBookButton.textContent = 'Remove';

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(pagesRead);
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

const clearFormInput = () => {
    addBookFormId.reset();

    const pagesReadInput = document.getElementById('pagesRead');
    pagesReadInput.setAttribute("placeholder", "Pages Read");
    pagesReadInput.style.border = "none";

    const bookNameInput = document.getElementById('bookName');
    bookNameInput.setAttribute('placeholder', 'Book Name');
    bookNameInput.style.border = "none";
}

const getBookFromUser = () => { 
    const title = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const pagesRead = document.getElementById('pagesRead').value;

    return new Book(title, author, pages, pagesRead);
}

const bookExists = (newBook) => {
    return booksList.some(book => (book.name).toLowerCase() === (newBook.name).toLowerCase());
}

const addBookToList = (e) => {
    e.preventDefault();

    const newBook = getBookFromUser();

    if(!bookExists(newBook)) {
        if(newBook.pages >= newBook.pagesRead) {
            booksList.push(newBook);
            populateBookSection()
            addBookFormModal.classList.toggle("active");
            bookListSection.classList.toggle("blur");
            addBookSection.classList.toggle('blur');
            clearFormInput();
        } else {
            pagesReadGreater();
        }

    } else {
        bookExistserror();
    }
}

const pagesReadGreater = () => {
    const pagesReadInput = document.getElementById('pagesRead');
    pagesReadInput.setAttribute("placeholder", "pages read is greater than total pages");
    pagesReadInput.style.border = "1px solid red";
    bookNameInput.value = "";
}

const bookExistserror = () => {
    const bookNameInput = document.getElementById('bookName');
    bookNameInput.setAttribute('placeholder', 'book already exists');
    bookNameInput.style.border = "1px solid red";
    bookNameInput.value = "";
}

addBookFormId.addEventListener('submit', addBookToList);

populateBookSection();


 

