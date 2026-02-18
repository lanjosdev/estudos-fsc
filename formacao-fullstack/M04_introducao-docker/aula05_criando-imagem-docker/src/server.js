import express from 'express';

const app = express();
const PORT = 3000;

// GET route for the "Hello, World!" message
app.get('/', (req, res) => {
    res.send('Hello, World!')
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});