let books = [];

function Addbooks(author, title) {
  this.author = author;
  this.title = title;
}

// let married = new Addbooks("Jimmy", "Main");


const titleObj = document.getElementById('title')
const authorObj = document.getElementById('author')
const formObj = document.getElementById('form');
// const add = document.getElementById('add');

let married = {};

formObj.addEventListener('submit', (event) => {

  event.preventDefault();

  married = new Addbooks(titleObj.value, authorObj.value);

  books.push(married);
  bookDetails();

  /*   const objectToString = JSON.stringify(books);
    localStorage.setItem('xx', objectToString) */



});

console.log(books)
/* const data = localStorage.getItem('xx');
const dataParsed = JSON.parse(data);
console.log(dataParsed) */

const bookDetails = () => {
  const booksDiv = document.getElementById('books-list')


  books.forEach(i => {
    //for (let i in books) {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('id', 'book');
    booksDiv.appendChild(bookDiv);

    const bookAuthor = document.createElement('p');
    bookAuthor.id = 'bookAuthor';
    bookDiv.appendChild(bookAuthor);
    bookAuthor.appendChild(document.createTextNode(i.author))

    const bookTitle = document.createElement('p');
    bookTitle.id = 'bookTitle';
    bookDiv.appendChild(bookTitle);
    bookTitle.appendChild(document.createTextNode(i.title))

    const removeBtn = document.createElement('button');
    removeBtn.id = 'remove-btn';
    removeBtn.className = 'remove-btn';
    bookDiv.appendChild(removeBtn);
    removeBtn.appendChild(document.createTextNode('Remove'))

  });

  // }
}











