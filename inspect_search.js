const fs = require('fs');
const header = fs.readFileSync('header_area.html', 'utf8');

// Search elements
const searchMatch = header.match(/<div[^>]*class="[^"]*search[^"]*"[\s\S]*?<\/form>/i);
if (searchMatch) console.log('Search form:\n', searchMatch[0]);

// Login elements
const loginMatch = header.match(/<div[^>]*class="[^"]*login[^"]*"[\s\S]*?<\/div>/i);
if (loginMatch) console.log('Login div:\n', loginMatch[0]);
