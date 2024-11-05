const mainContent = document.querySelector("#main-content");
const form = document.getElementById("form");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
let btnRemoves;

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
}

function addBookToLibrary() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newBook = new Book(title.value, author.value, parseInt(pages.value), read.checked);
    if (author.value === "" || title.value === "" || pages.value === "") {
      alert("Please fill all input fields.");
      return;
    }
    myLibrary.push(JSON.parse(JSON.stringify(newBook)));
    resetForm();
    displayBooks();
  });
}

function resetForm() {
  author.value = "";
  title.value = "";
  pages.value = "";
  read.checked = false;
}

function displayBooks() {
  mainContent.innerHTML = "";

  myLibrary.map((book, index) => {
    const bookItem = document.createElement("div");
    const header = document.createElement("div");
    const footer = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");
    const btnRemove = document.createElement("button");
    const btnIsRead = document.createElement("button");
    
    bookItem.classList.add("book");
    header.classList.add("book-header");
    footer.classList.add("book-footer");
    btnRemove.classList.add("btn-remove");
    btnRemove.setAttribute("data-id", index);
    btnIsRead.className = `${book.read ? "btn-isread btn-isread-true" : "btn-isread btn-isread-false"}`;

    title.innerText = book.title;
    author.innerText = `by ${book.author}`;
    pages.innerText = `${book.pages} pages`;
    // isRead.innerText = `${book.read ? "Read" : "Not Read Yet"}`;
    btnRemove.innerText = "Remove";
    btnIsRead.innerText = `${book.read ? "Read" : "Unread"}`

    header.append(title);
    header.append(author);
    footer.append(pages);
    // footer.append(isRead);
    footer.append(btnRemove);
    footer.append(btnIsRead);

    bookItem.append(header);
    bookItem.append(footer);
    mainContent.append(bookItem);
  });

  btnRemoves = document.querySelectorAll(".btn-remove");
  
  btnRemoves.forEach((btn) => btn.addEventListener("click", () => {
    const index = btn.getAttribute("data-id");
    myLibrary.splice(index, 1);
    displayBooks();
  }));
  
}

displayBooks();
addBookToLibrary();