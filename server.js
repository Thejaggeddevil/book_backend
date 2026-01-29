const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Tell the server where your files are
app.use(express.static(__dirname));

// The "Automatic Scanner" API
app.get('/api/books', (req, res) => {
    const directoryPath = path.join(__dirname, 'books');
    fs.readdir(directoryPath, (err, files) => {
        if (err) return res.status(500).send('Unable to scan books');
        // Filter to only show PDF files
        const pdfFiles = files.filter(file => file.endsWith('.pdf'));
        res.json(pdfFiles);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
