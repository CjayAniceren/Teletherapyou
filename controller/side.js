// script.js

// Get the iframe and sidebar links
const iframe = document.getElementById('page-content');
const links = document.querySelectorAll('.sidebar a');

// Add event listeners to the links
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const url = link.href;
    iframe.src = url;
  });
});