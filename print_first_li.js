const fs = require('fs');
const html = fs.readFileSync('section_1_7.html', 'utf8');

const firstLi = html.substring(html.indexOf('<li'), html.indexOf('</li>') + 5);
console.log(firstLi);
