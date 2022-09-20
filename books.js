const titleObj = document.getElementById("title");
const authorObj = document.getElementById("author");
const formObj = document.getElementById("form");

let books = [];

function addBooks(author, title, bookId) {
  this.author = author;
  this.title = title;
  this.bookId = bookId;
}

formObj.addEventListener("submit", (event) => {
  event.preventDefault();
  //const ids = Math.floor(Math.random() * 100000);
  const newBook = new addBooks(authorObj.value, titleObj.value);
  books.push(newBook)
  const newBookObj = JSON.stringify(books);
  saveToStorage(newBookObj)
  bookDetails();
});

const saveToStorage = (booksObj) => {
  localStorage.setItem('str', booksObj);
}

const bookDetails = () => {

  const getDataFromStorage = localStorage.getItem('str');
  const parsedData = JSON.parse(getDataFromStorage);

  const booksDiv = document.getElementById("books-list");
  booksDiv.innerHTML = "";

  if (!parsedData) {
    booksDiv.innerHTML = '<p>No books available.</p>';
  } else {

    // }
    parsedData.forEach((book, index) => {
      book.id = index + 1;

      booksDiv.innerHTML += `
      <div class="book" id="book">
        <p>${book.title}</p>
        <p>${book.author}</p>
      </div>
    `;

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.id = "btn" + book.id;
      removeBtn.setAttribute('type', 'submit');
      booksDiv.appendChild(removeBtn);
      removeBtn.appendChild(document.createTextNode("Remove" + index));

      function deleteFun(x) {
        removeBtn.addEventListener('click', () => {
          console.log(x)
        })
      }
      deleteFun(index)

    });
  }
};



document.addEventListener('DOMContentLoaded', () => {
  bookDetails();
})
