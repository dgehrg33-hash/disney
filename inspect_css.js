const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

const cssLinks = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)].map(m => m[0]);
console.log('CSS links:', cssLinks);

const fontFaces = [...html.matchAll(/@font-face\s*\{[^}]*\}/gi)].map(m => m[0]);
console.log('Font faces in HTML:', fontFaces);

const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log('Inline styles count:', inlineStyles.length);
if (inlineStyles.length > 0) {
  fs.writeFileSync('inline_styles.css', inlineStyles.join('\n\n'));
  console.log('Saved inline styles');
}
