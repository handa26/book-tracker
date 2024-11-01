const mainContent = document.querySelector("#main-content");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: false,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1216,
    read: true,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addBookToLibrary() {
  
}

function displayBooks() {
  myLibrary.map((book) => {
    const bookItem = document.createElement("div");
    const header = document.createElement("div");
    const footer = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");
    
    bookItem.classList.add("book");
    header.classList.add("book-header");
    footer.classList.add("book-footer");

    title.innerText = book.title;
    author.innerText = `by ${book.author}`;
    pages.innerText = `${book.pages} pages`;
    isRead.innerText = `${book.read ? "Read" : "Not Read Yet"}`;

    header.append(title);
    header.append(author);
    footer.append(pages);
    footer.append(isRead);

    bookItem.append(header);
    bookItem.append(footer);
    mainContent.append(bookItem);
  });
}

displayBooks();