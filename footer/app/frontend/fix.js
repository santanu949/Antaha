const fs = require('fs');

const footerPath = 'c:/Users/saanu/Downloads/footer/app/frontend/src/components/Footer.jsx';
let content = fs.readFileSync(footerPath, 'utf8');
if (content.startsWith('"') && content.endsWith('"\n')) {
  content = content.substring(1, content.length - 2); // remove " and \n
  content = content.replace(/\\"/g, '"');
  fs.writeFileSync(footerPath, content);
}
