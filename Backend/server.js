const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the "dist" folder (React build output)
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route for React Router (return index.html for all client-side routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
