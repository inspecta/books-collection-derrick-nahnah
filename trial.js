// const bookForm = document.querySelector('.bookForm')
// const books = document.querySelector('.books')
// const titleInput = bookForm['title']
// const authorInput = bookForm['author']
// //DECLARE A VARIABLE
// let book;
// //DECLARE AN ARRAY
// let bookArr = JSON.parse(localStorage.getItem('bookAdded')) || []
// //CREATE A FUNCTION TO ADD BOOKS AS OBJECTS
// function addBook () {
//     book = {
//         title: titleInput.value,
//         author: authorInput.value,
//         //SET RANDOM ID
//         id: Math.floor(Math.random() * 1000000000),
//     };
//     //PUSH THE BOOK OBJECT INTO THE ARRAY CREATED
//     bookArr.push(book);
//     //SET ARRAY TO LOCAL STORAGE
//     localStorage.setItem('bookAdded', JSON.stringify(bookArr))
// }
// //FUNCTION TO REMOVE BOOK FROM LOCALSTORAGE USING THE ID
// function removeBook(id) {
//     bookArr = bookArr.filter(books => books.id !== id);
//     localStorage.setItem('bookAdded', JSON.stringify(bookArr));
// };
// //CREATING BOOKS DYNAMICALLY
// function bookCreate (book) {
//     const newBook = document.createElement('div');
//     const bookTitle = document.createElement('h3');
//     const bookAuthor = document.createElement('h3');
//     const removeButton = document.createElement('button');
//     const horizontalLine = document.createElement('hr');
//     //GIVING NEW ELEMENTS INNERTEXTS FROM DATA OF THE ARRAYS
//     bookTitle.innerText = book.title
//     bookAuthor.innerText = book.author
//     removeButton.innerText = 'remove'
//     newBook.append(bookAuthor, bookTitle, removeButton, horizontalLine)
//     books.appendChild(newBook)
//     //EVENT LISTENER FOR THE REMOVE BUTTON
//     removeButton.addEventListener('click', () => {
//     removeButton.parentElement.remove()
//     removeBook(book.id)
//     })
// }
// bookArr.forEach(bookCreate);
// bookForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(titleInput.value !== '' || authorInput.value !== '') {
//         addBook();
//         bookCreate(book);
//         bookForm.reset();
//     }
//     else {
//         alert('Please enter a title and author');
//     }
// })


const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.getElementById('book-form');
const library = document.getElementById('library');
let book;
let books = JSON.parse(localStorage.getItem('books')) || [];
function addBook() {
  book = {
    title: title.value,
    author: author.value,
    id: Math.floor(Math.random() * 1000000),
  };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}
function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(books));
}
function populate(book) {
  const row = document.createElement('tr');
  const bookTitle = document.createElement('td');
  const bookAuthor = document.createElement('td');
  const removeBtn = document.createElement('button');
  bookTitle.innerText = book.title;
  bookAuthor.innerText = book.author;
  removeBtn.innerText = 'Remove';
  row.append(bookTitle, bookAuthor, removeBtn);
  library.append(row);
  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
    removeBook(book.id);
  });
}
books.forEach(populate);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value !== '' && author.value !== '') {
    addBook();
    populate(book);
    form.reset();
  } else {
    alert('Please enter a title and author');
  }
});
