// מגישים: בלייב מור וחיים אשרף 50/5

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve CSS and other static files
app.use(express.static(path.join(__dirname, 'public')));

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'page.html'));
});

// About page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'about.html'));
});

// Contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'contact.html'));
});

// Start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});
