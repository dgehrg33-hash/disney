const fs = require('fs');
const sections = JSON.parse(fs.readFileSync('parsed_homepage_sections.json', 'utf8'));

sections.forEach(s => {
  console.log(`[#${s.index}] ID: ${s.id} | Class: ${s.className}`);
  if (s.headings.length) console.log('   Headings:', s.headings);
  if (s.titles.length) console.log('   Titles:', s.titles.slice(0, 4));
  if (s.images.length) console.log('   Images count:', s.images.length, 'Sample:', s.images[0].src.substring(0, 100));
  if (s.links.length) console.log('   Links:', s.links.map(l => l.text).slice(0, 4));
});
