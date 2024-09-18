
const express = require('express');
const app = express();
const PORT = 7000;

app.get('/', (req, res) => {
    res.send('Hello, World from Dockerized Node.js App!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
