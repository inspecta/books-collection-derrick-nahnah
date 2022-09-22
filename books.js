const titleObj = document.querySelector('#title');
const authorObj = document.querySelector('#author');
const formObj = document.querySelector('#form');
const container = document.getElementById('books-list');
// eslint-disable-next-line no-unused-vars
const reBtn = document.querySelector('.btn');

let totalBooks = JSON.parse(localStorage.getItem('store')) || [];

// BOOK CLASS CREATION
class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  // eslint-disable-next-line class-methods-use-this
  displayBooks(bookObj) {
    const holder = document.createElement('div');
    const bkTitle = document.createElement('h3');
    const bkAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const line = document.createElement('hr');

    // Assigning Innertext to Created elements

    bkTitle.innerText = bookObj.title;
    bkAuthor.innerText = bookObj.author;
    removeBtn.innerText = 'Remove Book';
    // Add object id to data-id attribute
    removeBtn.setAttribute('data-id', bookObj.id);
    removeBtn.className = 'btn';
    holder.append(bkTitle);
    holder.append(bkAuthor);
    holder.append(removeBtn);
    holder.append(line);
    container.append(holder);
  }

  // eslint-disable-next-line class-methods-use-this
  deleteBook(e) {
    if (e.classList.contains('btn')) {
      // Retrieve data-id attribute.
      // It's a string, change it into number
      const id = Number(e.getAttribute('data-id'));
      totalBooks = totalBooks.filter((book) => book.id !== id);
      localStorage.setItem('store', JSON.stringify(totalBooks));
      e.parentElement.remove();
    }
  }
}

const book = new Books();

function loopFunc() {
  totalBooks.forEach((e) => {
    book.displayBooks(e);
  });
}
loopFunc();

formObj.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 10000);
  const book = new Books(titleObj.value, authorObj.value, id);
  container.innerHTML = '';
  totalBooks.push(book);
  localStorage.setItem('store', JSON.stringify(totalBooks));
  loopFunc();
  formObj.reset();
});

container.addEventListener('click', (e) => {
  book.deleteBook(e.target);
});