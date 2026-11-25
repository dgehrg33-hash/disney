const fs = require('fs');

const html = fs.readFileSync('disney_homepage.html', 'utf8');

console.log('--- BASIC INFO ---');
const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');

// Extract links, scripts, fonts
const fonts = [...html.matchAll(/fonts\.disney[^"' ]+/g)].map(m => m[0]);
console.log('Fonts found:', [...new Set(fonts)].slice(0, 10));

// Find JSON data embedded in the page (like Next/Nuxt or Redux or Matterhorn data)
const jsonMatches = [...html.matchAll(/<script[^>]*type=["']application\/json["'][^>]*>([\s\S]*?)<\/script>/gi)];
console.log('JSON scripts found:', jsonMatches.length);

// Also look for window.__ or similar data objects
const windowMatches = [...html.matchAll(/window\.__[A-Z0-9_]+\s*=\s*(\{[\s\S]*?\});/gi)];
console.log('Window data objects:', windowMatches.map(m => m[0].substring(0, 50)));

// Let's look for main section titles and data-testid or class names
const sections = [...html.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi)];
console.log('Sections found:', sections.length);

const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H1s:', h1s);
console.log('H2s:', h2s);
console.log('H3s (first 10):', h3s.slice(0, 10));

// Check nav items
const navMatches = [...html.matchAll(/<nav[\s\S]*?<\/nav>/gi)];
console.log('Nav count:', navMatches.length);
if (navMatches[0]) {
  console.log('Nav 0 snippet:', navMatches[0][0].substring(0, 500));
}

// Find images
const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log('Image URLs found:', imgMatches.length);
console.log('Sample images:', imgMatches.slice(0, 8));
