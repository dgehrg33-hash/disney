const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

// Let's write a parser specifically for cards inside flex_grid_card
function extractCards(sectionId) {
  const secRegex = new RegExp(`<section[^>]*id="${sectionId}"[\\s\\S]*?<\\/section>`, 'i');
  const secMatch = html.match(secRegex);
  if (!secMatch) return null;
  const content = secMatch[0];

  // Each card is usually in a div or li
  // Let's find all cards
  const cards = [];
  // Match card blocks
  const cardRegex = /<li[^>]*class="[^"]*card[^"]*"[^>]*>([\s\S]*?)<\/li>|<div[^>]*class="[^"]*card[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  // Let's also look for flex-grid-item
  const itemRegex = /<li[^>]*class="[^"]*(?:flex-grid-item|card)[^"]*"[^>]*>([\s\S]*?)<\/li>/gi;
  
  let m;
  while ((m = itemRegex.exec(content)) !== null) {
    const itemBody = m[1];
    const img = (itemBody.match(/<img[^>]+src="([^">]+)"/) || [])[1];
    const title = (itemBody.match(/class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/) || [])[1];
    const desc = (itemBody.match(/class="[^"]*(?:subhead|caption|body-copy|desc)[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/) || [])[1];
    const cta = (itemBody.match(/class="[^"]*(?:btn|cta|button-title)[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/) || [])[1];
    const link = (itemBody.match(/<a[^>]+href="([^">]+)"/) || [])[1];

    cards.push({
      img: img ? img.replace(/&amp;/g, '&') : null,
      title: title ? title.replace(/<[^>]+>/g, '').trim() : null,
      desc: desc ? desc.replace(/<[^>]+>/g, '').trim() : null,
      cta: cta ? cta.replace(/<[^>]+>/g, '').trim() : null,
      link
    });
  }
  return cards;
}

['ref-1-7', 'ref-1-9', 'ref-1-13', 'ref-1-14', 'ref-1-15'].forEach(id => {
  console.log('=== SECTION', id, '===');
  const cards = extractCards(id);
  console.log(JSON.stringify(cards, null, 2));
});
