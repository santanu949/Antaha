const fs = require('fs');
const files = [
  'src/App.js',
  'src/mock.js',
  'src/components/PricingPage.jsx',
  'src/components/PricingCard.jsx',
  'src/components/SegmentedToggle.jsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('// empty file\n"') || content.startsWith('// empty file\r\n"')) {
    let code = content.replace(/\/\/ empty file\r?\n/, '');
    if (code.startsWith('"') && code.endsWith('"\n')) {
      code = code.substring(1, code.length - 2);
    } else if (code.startsWith('"') && code.endsWith('"')) {
      code = code.substring(1, code.length - 1);
    }
    code = code.replace(/\\"/g, '"');
    fs.writeFileSync(f, code, 'utf8');
    console.log('Fixed manually', f);
  } else {
    console.log('Skipped', f);
  }
});
