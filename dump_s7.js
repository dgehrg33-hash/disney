const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

const s7 = html.match(/<section[^>]*id="ref-1-7"[\s\S]*?<\/section>/i);
if (s7) {
  fs.writeFileSync('section_1_7.html', s7[0]);
  console.log('Saved section_1_7.html, length:', s7[0].length);
  console.log(s7[0].substring(0, 1500));
}
