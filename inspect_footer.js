const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

const footerArea = html.substring(html.indexOf('<footer') > -1 ? html.indexOf('<footer') : html.indexOf('id="goc-ft'));
console.log('Footer snippet:');
console.log(footerArea.substring(0, 3000));
