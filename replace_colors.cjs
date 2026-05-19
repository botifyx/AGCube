const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let modifiedCount = 0;
walkDir('src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/\bteal\b/g, 'blue');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            modifiedCount++;
            console.log('Updated: ' + filePath);
        }
    }
});

console.log('Modified ' + modifiedCount + ' files.');
