const fs = require('fs');

const footerPath = 'src/components/Footer.jsx';
let content = fs.readFileSync(footerPath, 'utf8');

// The file was likely copied as a giant string literal, so it begins and ends with quotes
if (content.startsWith('"')) {
  content = content.replace(/^"/, '');
}
if (content.endsWith('"\n')) {
  content = content.replace(/"\n$/, '');
}
if (content.endsWith('"')) {
  content = content.replace(/"$/, '');
}

// Unescape "
content = content.replace(/\\"/g, '"');
// Unescape \n
// But wait, the file has actual literal newlines. 
// Just unescape \" and \\
content = content.replace(/\\\\/g, '\\');

fs.writeFileSync(footerPath, content);
console.log('Fixed Footer.jsx!');
