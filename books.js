const titleObj = document.querySelector('#title');
const authorObj = document.querySelector('#author');
const formObj = document.querySelector('#form');
const container = document.getElementById('books-list');

class Books {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const id = Math.floor(Math.random() * 10000);
    this.books = this.books.concat({ title, author, id });
    return this.books;
  }

  deleteBook(e) {
    if (e.classList.contains('btn')) {
      // Retrieve data-id attribute.
      // It's a string, change it into number
      const id = Number(e.getAttribute('data-id'));
      this.books = this.books.filter((book) => book.id !== id);
      localStorage.setItem('store', JSON.stringify(this.books));
      e.parentElement.remove();
      if (this.books.length === 0) {
        container.innerHTML = '<p class="no-books">No books available!</p>';
      }
    }
  }

  static retrieveFromLocalStorage(key) {
    this.books = JSON.parse(localStorage.getItem(key));
    return this.books;
  }

  static displayBooks(bookObj) {
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
}

const book = new Books();
book.books = Books.retrieveFromLocalStorage('store') || [];

function loopFunc() {
  book.books.forEach((e) => {
    Books.displayBooks(e);
  });
}
loopFunc();

formObj.addEventListener('submit', (e) => {
  e.preventDefault();
  book.addBook(titleObj.value, authorObj.value);
  container.innerHTML = '';
  localStorage.setItem('store', JSON.stringify(book.books));
  loopFunc();
  formObj.reset();
});

container.addEventListener('click', (e) => {
  book.deleteBook(e.target);
});

if (book.books.length === 0) {
  container.innerHTML = '<p class="no-books">No books available!</p>';
}
