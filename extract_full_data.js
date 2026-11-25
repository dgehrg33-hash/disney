const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

// Let's inspect the GOC header navigation items in detail
const gocMatch = html.match(/<div[^>]*id="goc"[^>]*>([\s\S]*?)<\/section>/i) || html.match(/id="goc-body"[\s\S]*?<\/header>/i);
// Let's find all items inside goc
const gocNavMatch = html.match(/<nav[^>]*id="goc-desktop-global"[^>]*>([\s\S]*?)<\/nav>/i) || html.match(/<ul[^>]*id="goc-nav"[^>]*>([\s\S]*?)<\/ul>/i) || html.match(/class="[^"]*nav[^"]*"[\s\S]*?<\/nav>/i);

// Let's dump all text and attributes in the header area
const headArea = html.substring(html.indexOf('<body'), html.indexOf('id="ref-1-6"'));
fs.writeFileSync('header_area.html', headArea);
console.log('Header area saved, length:', headArea.length);

// Let's extract each section block
const sectionRegex = /<section\s+id="([^"]+)"\s+class="([^"]+)"[^>]*>([\s\S]*?)<\/section>/gi;
let match;
const extractedSections = [];

while ((match = sectionRegex.exec(html)) !== null) {
  const id = match[1];
  const className = match[2];
  const body = match[3];

  // Extract all cards / items in this section
  const cardMatches = [...body.matchAll(/<div[^>]*class="[^"]*(?:card|grid-item|item|hero-content|flex-content)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
  
  // Extract all links
  const links = [...body.matchAll(/<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map(l => ({
    href: l[1],
    text: l[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  }));

  // Extract all images
  const images = [...body.matchAll(/<img\s+[^>]*src="([^"]+)"(?:[^>]*alt="([^"]*)")?[^>]*>/gi)].map(i => ({
    src: i[1],
    alt: i[2] || ''
  }));

  // Extract headings
  const headings = [...body.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());

  extractedSections.push({
    id,
    className,
    headings,
    linkCount: links.length,
    links: links.slice(0, 8),
    images
  });
}

fs.writeFileSync('extracted_sections.json', JSON.stringify(extractedSections, null, 2));
console.log('Extracted', extractedSections.length, 'sections.');
