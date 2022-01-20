const apiUrl = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch(apiUrl)
    .then(r => r.json())
    .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});