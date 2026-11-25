const fs = require('fs');
const data = JSON.parse(fs.readFileSync('all_sections_structured.json', 'utf8'));

data.forEach(s => {
  if (s.cardsCount > 0) {
    console.log(`\nSection #${s.index} (${s.id}) - Heading: "${s.heading}" - Cols: ${s.columns} - Bg: ${s.bgColor}`);
    s.cards.forEach((c, i) => {
      console.log(`  [Card ${i+1}] ${c.title} | CTA: ${c.cta} | Img: ${c.image.substring(0, 60)}...`);
    });
  } else if (s.isHero) {
    console.log(`\nSection #${s.index} HERO (${s.id}) - Title: "${s.heroDetails ? s.heroDetails.title : ''}"`);
    if (s.heroDetails) {
      console.log('  Hero bg:', s.heroDetails.bg ? s.heroDetails.bg.substring(0, 70) : null);
      console.log('  Hero buttons:', s.heroDetails.buttons);
    }
  }
});
