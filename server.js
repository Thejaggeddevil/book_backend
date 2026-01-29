const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== STATIC FILES =====
// public → html, js, css
// books  → pdf files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/books', express.static(path.join(__dirname, 'books')));

// ===== HOME ROUTE (IMPORTANT FOR WEBVIEW) =====
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== BOOK SCANNER API =====
app.get('/api/books', (req, res) => {
    const directoryPath = path.join(__dirname, 'books');

    // 🔥 DO NOT CRASH IF FOLDER IS MISSING
    if (!fs.existsSync(directoryPath)) {
        console.warn('⚠️ books folder not found');
        return res.json([]);
    }

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('❌ Error reading books folder', err);
            return res.json([]); // never break UI
        }

        const pdfFiles = files.filter(file =>
            file.toLowerCase().endsWith('.pdf')
        );

        res.json(pdfFiles);
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
