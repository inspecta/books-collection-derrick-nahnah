const titleObj = document.querySelector("#title");
const authorObj = document.querySelector("#author");
const formObj = document.querySelector("#form");
const container = document.getElementById("books-list")

let bookObj;

let totalBooks = JSON.parse(localStorage.getItem('store')) || []

function addBooks () {
  bookObj = {
    title: titleObj.value,
    author: authorObj.value,
    id: Math.floor(Math.random() * 10000)
  };
  totalBooks.push(bookObj);
  localStorage.setItem('store', JSON.stringify(totalBooks))
}

//Function to remove from the local storage using created ID

function bookRemove(id) {
  totalBooks = totalBooks.filter(container => container.id != id);
  localStorage.setItem('store', JSON.stringify(totalBooks));
};

//Creating Dynamic BOOKS

function createBook(bookObj) {
  const holder = document.createElement('div');
  const bkTitle = document.createElement('h3');
  const bkAuthor = document.createElement('p');
  const removeBtn = document.createElement('button');
  const line = document.createElement('hr');

  //Assigning Innertext to Created elements

  bkTitle.innerText = bookObj.title
  bkAuthor.innerText = bookObj.author
  removeBtn.innerText = 'Remove Book'
  holder.append(bkTitle)
  holder.append(bkAuthor)
  holder.append(removeBtn)
  holder.append(line)
  container.append(holder)

  //Event listener for the button

  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
    bookRemove(bookObj.id)
  })
}

