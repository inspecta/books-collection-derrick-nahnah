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

const homePageSection = document.getElementById('home-page');
const addPageSection = document.getElementById('add-page');
const contactPageSection = document.getElementById('contact-page');

const linksBtn = document.getElementById('lists');
const addBookBtn = document.getElementById('add-link');
const contactBtn = document.getElementById('contact');

linksBtn.addEventListener('click', () => {
  addPageSection.style.display = 'none';
  contactPageSection.style.display = 'none';
  homePageSection.style.display = 'block';

  linksBtn.classList.add('active');
  addBookBtn.classList.remove('active');
  contactBtn.classList.remove('active');
});

addBookBtn.addEventListener('click', () => {
  homePageSection.style.display = 'none';
  contactPageSection.style.display = 'none';
  addPageSection.style.display = 'block';

  linksBtn.classList.remove('active');
  addBookBtn.classList.add('active');
  contactBtn.classList.remove('active');
});

contactBtn.addEventListener('click', () => {
  addPageSection.style.display = 'none';
  homePageSection.style.display = 'none';
  contactPageSection.style.display = 'block';

  linksBtn.classList.remove('active');
  contactBtn.classList.add('active');
  addBookBtn.classList.remove('active');
});

window.addEventListener('DOMContentLoaded', () => {
  addPageSection.style.display = 'none';
  contactPageSection.style.display = 'none';
  homePageSection.style.display = 'block';
});

const dateTime = document.querySelector('.date-time');
const date = new Date();

// March 19th 2022, 9.25:32 am
const setTime = () => {
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  const hours = date.getHours({ hour12: true });
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const finalDate = ''.concat(month, ' ', day, '/', year, ', ', hours, '.', minutes, ':', seconds);
  dateTime.innerHTML = finalDate;
}

setInterval(setTime, 1000);

