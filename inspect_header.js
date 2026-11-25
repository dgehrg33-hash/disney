const fs = require('fs');
const header = fs.readFileSync('header_area.html', 'utf8');

// Find all anchor links and list items in header
const links = [...header.matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
  href: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim()
})).filter(l => l.text.length > 0);

console.log('Header links:');
console.log(links);

// Find navigation buttons / search / login
const buttons = [...header.matchAll(/<(?:button|span|div)[^>]*class="[^"]*(?:search|login|signin|user|profile|menu|toggle)[^"]*"[^>]*>([\s\S]*?)<\/(?:button|span|div)>/gi)].map(m => m[0].substring(0, 150));
console.log('Buttons/Controls in header:');
console.log(buttons.slice(0, 10));

// Find any dropdown menus in header
const submenus = [...header.matchAll(/<ul[^>]*class="[^"]*(?:sub|drop|menu)[^"]*"[^>]*>([\s\S]*?)<\/ul>/gi)].map(m => m[0].substring(0, 200));
console.log('Submenus count:', submenus.length);
