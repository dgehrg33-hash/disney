const fs = require('fs');
const html = fs.readFileSync('section_1_7.html', 'utf8');

const lis = [...html.matchAll(/<li\s+data-title="([^"]+)"[^>]*>([\s\S]*?)<\/li>/gi)];
lis.forEach((li, idx) => {
  const title = li[1];
  const body = li[2];
  const dataSrc = (body.match(/data-src="([^"]+)"/) || [])[1];
  const src = (body.match(/src="([^"]+)"/) || [])[1];
  const href = (body.match(/href="([^"]+)"/) || [])[1];
  const btn = (body.match(/<button[^>]*>([\s\S]*?)<\/button>|<a[^>]*class="[^"]*(?:btn|cta)[^"]*"[^>]*>([\s\S]*?)<\/a>/i) || [])[0];
  const textMatches = [...body.matchAll(/<div[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const subheads = [...body.matchAll(/<div[^>]*class="[^"]*(?:subhead|caption|body-copy)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  console.log(`\nCard ${idx + 1}:`);
  console.log('  Data-Title:', title);
  console.log('  Image:', dataSrc || src);
  console.log('  Href:', href);
  console.log('  Titles:', textMatches);
  console.log('  Subheads:', subheads);
  console.log('  Btn snippet:', btn);
});
