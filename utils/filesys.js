const fs = require('fs');
const path = require('path');

// Directory to store files
const FOLDER_PATH = path.join(__dirname, '../files');

// Create the directory if it doesn't exist
function ensureFolderExists() {
    if (!fs.existsSync(FOLDER_PATH)) {
        fs.mkdirSync(FOLDER_PATH);
        console.log('Folder created:', FOLDER_PATH);
    }
}

// Create a text file with the current timestamp as content
function createFile() {
    ensureFolderExists();
    const timestamp = new Date().toISOString();
    const fileName = `${timestamp.replace(/:/g, '-')}.txt`;
    const filePath = path.join(FOLDER_PATH, fileName);

    fs.writeFileSync(filePath, timestamp);
    return fileName;
}

// Get the list of all text files in the folder
function listFiles() {
    ensureFolderExists();
    return fs.readdirSync(FOLDER_PATH).filter((file) => file.endsWith('.txt'));
}

module.exports = { createFile, listFiles };
