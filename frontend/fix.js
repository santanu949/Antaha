const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/components/FloatingCards.jsx');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\\"/g, '"');
content = content.replace(/^.*?\nAction:.*?\n/, 'import React from "react";\n');
if (content.endsWith('"\n')) {
  content = content.slice(0, -2) + '\n';
}
fs.writeFileSync(file, content);
console.log('Fixed FloatingCards.jsx');
