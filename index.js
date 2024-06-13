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

const getBookFromUser = () => { 
    const title = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const pagesRead = document.getElementById('pagesRead').value;

    return new Book(title, author, pages, pagesRead);
}

const bookExists = (newBook) => {
    console.log("new book esists")
    console.log(newBook)
    console.log(booksList)
    console.log(booksList.some((book) => book.title === newBook.title));
    return booksList.some((book) => book.title === newBook.title);
}

const addBookToList = (e) => {
    e.preventDefault();

    const newBook = getBookFromUser();
    console.log(newBook)

    if(!bookExists(newBook)) {
        booksList.push(newBook);
        populateBookSection()
        console.log(booksList)
    } else {
        console.log("book already exists")
    }
}

addBookFormId.addEventListener('submit', addBookToList);

populateBookSection();


 

