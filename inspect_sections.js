const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

// Let's inspect the main header
const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i) || html.match(/<div[^>]*id="goc"[^>]*>([\s\S]*?)<\/div>/i);
console.log('--- HEADER ---');
if (headerMatch) {
  console.log(headerMatch[0].substring(0, 1500));
}

// Let's inspect all <section> tags
console.log('\n--- SECTIONS DETAIL ---');
const sectionMatches = [...html.matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/gi)];
sectionMatches.forEach((s, idx) => {
  const attrs = s[1];
  const content = s[2];
  // find headings, images, links
  const headings = [...content.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  const titles = [...content.matchAll(/class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/gi)].map(t => t[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  const imgs = [...content.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/gi)].map(i => i[1]);
  const btnTexts = [...content.matchAll(/<(?:a|button)[^>]*class="[^"]*(?:btn|button|cta)[^"]*"[^>]*>([\s\S]*?)<\/(?:a|button)>/gi)].map(b => b[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  
  console.log(`\nSection #${idx}: attrs: ${attrs.slice(0, 100)}`);
  if (headings.length) console.log('  Headings:', headings);
  if (titles.length) console.log('  Titles:', titles.slice(0, 5));
  if (imgs.length) console.log('  Images (' + imgs.length + '):', imgs.slice(0, 3));
  if (btnTexts.length) console.log('  Buttons:', btnTexts);
});

// Let's check footer
const footerMatch = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
console.log('\n--- FOOTER ---');
if (footerMatch) {
  console.log(footerMatch[0].substring(0, 1200));
}
