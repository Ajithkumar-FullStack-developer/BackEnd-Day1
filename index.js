const express = require('express');
const { createFile, listFiles } = require('./utils/filesys');

const app = express();
const PORT = 3000;

// Serve endpoint details at the root URL
app.get('/', (req, res) => {
    const html = `
        <h1>API Endpoints</h1>
        <ul>
            <li><strong>POST /create-file:</strong> Creates a new text file with the current timestamp.</li>
            <li><strong>GET /list-files:</strong> Retrieves all text files in the directory.</li>
        </ul>
        <p>Use tools like Postman or cURL to interact with these endpoints.</p>
    `;
    res.send(html);
});

// Create a text file
app.post('/create-file', (req, res) => {
    try {
        const fileName = createFile();
        res.status(201).json({ message: 'File created successfully!', fileName });
    } catch (error) {
        console.error('Error creating file:', error);
        res.status(500).json({ error: 'An error occurred while creating the file.' });
    }
});

// List all text files
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
