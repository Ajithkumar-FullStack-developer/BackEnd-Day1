const express = require('express');
const { createFile, listFiles } = require('./utils/filesys');

const app = express();
const PORT = 3000;

// Endpoint to create a new text file
app.post('/create-file', (req, res) => {
    try {
        const fileName = createFile();
        res.status(201).json({ message: 'File created successfully!', fileName });
    } catch (error) {
        console.error('Error creating file:', error);
        res.status(500).json({ error: 'An error occurred while creating the file.' });
    }
});

// Endpoint to list all text files
app.get('/list-files', (req, res) => {
    try {
        const files = listFiles();
        res.status(200).json({ files });
    } catch (error) {
        console.error('Error retrieving files:', error);
        res.status(500).json({ error: 'An error occurred while retrieving the files.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
