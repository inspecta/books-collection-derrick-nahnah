const titleObj = document.querySelector('#title');
const authorObj = document.querySelector('#author');
const formObj = document.querySelector('#form');
const container = document.getElementById('books-list');
// eslint-disable-next-line no-unused-vars
const reBtn = document.querySelector('.btn');

// BOOK CLASS CREATION
class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static totalBooks = JSON.parse(localStorage.getItem('store')) || [];

  // eslint-disable-next-line class-methods-use-this
  displayBooks(bookObj) {
    const holder = document.createElement('div');
    const titleAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');

    titleAuthor.innerText = `"${bookObj.title}" by ${bookObj.author}`;
    removeBtn.innerText = 'Remove';
    removeBtn.setAttribute('data-id', bookObj.id);
    removeBtn.className = 'btn';
    titleAuthor.className = 'title-author';
    holder.className = 'book-holder';
    holder.append(titleAuthor);
    holder.append(removeBtn);
    container.append(holder);
  }

  // eslint-disable-next-line class-methods-use-this
  deleteBook(e) {
    if (e.classList.contains('btn')) {
      // Retrieve data-id attribute.
      // It's a string, change it into number
      const id = Number(e.getAttribute('data-id'));
      Books.totalBooks = Books.totalBooks.filter((book) => book.id !== id);
      localStorage.setItem('store', JSON.stringify(Books.totalBooks));
      e.parentElement.remove();
      if (Books.totalBooks.length === 0) {
        container.innerHTML = '<p class="no-books">No books available!</p>';
      }
    }
  }
}

const book = new Books();

function loopFunc() {
  Books.totalBooks.forEach((e) => {
    book.displayBooks(e);
  });
}
loopFunc();

formObj.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 10000);
  const book = new Books(titleObj.value, authorObj.value, id);
  container.innerHTML = '';
  Books.totalBooks.push(book);
  localStorage.setItem('store', JSON.stringify(Books.totalBooks));
  loopFunc();
  formObj.reset();
});

container.addEventListener('click', (e) => {
  book.deleteBook(e.target);
});

if (Books.totalBooks.length === 0) {
  container.innerHTML = '<p class="no-books">No books available!</p>';
}
