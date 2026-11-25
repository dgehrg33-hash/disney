const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

const s9 = (html.match(/<section[^>]*id="ref-1-9"[\s\S]*?<\/section>/i) || [])[0];
if (s9) {
  const imgs = [...s9.matchAll(/data-src="([^"]+)"|src="([^"]+)"/gi)].map(m => m[1] || m[2]);
  console.log('Section 1-9 images:');
  imgs.forEach(i => console.log(i));
}

const s13 = (html.match(/<section[^>]*id="ref-1-13"[\s\S]*?<\/section>/i) || [])[0];
if (s13) {
  const imgs = [...s13.matchAll(/data-src="([^"]+)"|src="([^"]+)"/gi)].map(m => m[1] || m[2]);
  console.log('Section 1-13 images:');
  imgs.forEach(i => console.log(i));
}
