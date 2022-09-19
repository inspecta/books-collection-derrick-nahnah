const books = [];

function Addbooks(author, title) {
  this.author = author;
  this.title = title;
}

// let married = new Addbooks("Jimmy", "Main");
let married = {};

 const titleObj = document.getElementById('title')
 const authorObj = document.getElementById('author')
 const formObj = document.getElementById('form');

 formObj.addEventListener('submit', (event) => {
  event.preventDefault();

  married = new Addbooks(titleObj.value, authorObj.value);
  // console.log(titleObj.value);
  // console.log(authorObj.value);
  books.push(married);
//  console.log(books)  

 });

//  books.forEach() {
//    document.createElement('div');
//    document.createElement('p');
//    document.createElement('p');
//    document.createElement('button');
//  }






