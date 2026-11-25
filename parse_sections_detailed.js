const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

// Find all section tags
const sectionRegex = /<section([\s\S]*?)<\/section>/gi;
let match;
let index = 0;
const results = [];

while ((match = sectionRegex.exec(html)) !== null) {
  const fullTag = match[0];
  const openingTag = match[1].substring(0, match[1].indexOf('>'));
  const body = match[1].substring(match[1].indexOf('>') + 1);

  // Extract id and class
  const idMatch = openingTag.match(/id="([^"]+)"/);
  const classMatch = openingTag.match(/class="([^"]+)"/);

  const id = idMatch ? idMatch[1] : `section-${index}`;
  const className = classMatch ? classMatch[1] : '';

  // Extract images
  const imgRegex = /<img[^>]+src="([^">]+)"(?:[^>]*alt="([^">]*)")?[^>]*>/gi;
  const images = [];
  let mImg;
  while ((mImg = imgRegex.exec(body)) !== null) {
    images.push({ src: mImg[1].replace(/&amp;/g, '&'), alt: mImg[2] || '' });
  }

  // Extract source tags inside picture
  const sourceRegex = /<source[^>]+srcset="([^">]+)"(?:[^>]*media="([^">]*)")?[^>]*>/gi;
  const sources = [];
  let mSrc;
  while ((mSrc = sourceRegex.exec(body)) !== null) {
    sources.push({ srcset: mSrc[1].replace(/&amp;/g, '&'), media: mSrc[2] || '' });
  }

  // Extract all text contents of headings
  const headings = [...body.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);

  // Extract all links & buttons
  const links = [...body.matchAll(/<a[^>]+href="([^">]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map(l => ({
    href: l[1],
    text: l[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  })).filter(l => l.text.length > 0);

  // Extract titles or subtitles
  const titles = [...body.matchAll(/class="[^"]*(?:title|subhead|caption|eyebrow|desc|body-copy)[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/gi)].map(t => t[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);

  results.push({
    index,
    id,
    className,
    headings,
    titles: [...new Set(titles)],
    links: links.slice(0, 10),
    images,
    sources
  });

  index++;
}

fs.writeFileSync('parsed_homepage_sections.json', JSON.stringify(results, null, 2));
console.log('Successfully parsed', results.length, 'sections.');
