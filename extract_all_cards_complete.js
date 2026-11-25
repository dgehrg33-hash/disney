const fs = require('fs');
const html = fs.readFileSync('disney_homepage.html', 'utf8');

const sectionMatches = [...html.matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/gi)];

const fullData = [];

sectionMatches.forEach((s, idx) => {
  const attrs = s[1];
  const body = s[2];

  const idMatch = attrs.match(/id="([^"]+)"/);
  const classMatch = attrs.match(/class="([^"]+)"/);
  const colMatch = attrs.match(/--flex-grid-columns:\s*(\d+)/);
  const id = idMatch ? idMatch[1] : `sec-${idx}`;
  const className = classMatch ? classMatch[1] : '';
  const columns = colMatch ? parseInt(colMatch[1]) : null;

  // Background style
  const bgMatch = body.match(/background-color:\s*([^;]+);/);
  const bgColor = bgMatch ? bgMatch[1].trim() : null;

  // Section Heading / Title
  const headingMatch = body.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i);
  const heading = headingMatch ? headingMatch[1].replace(/<[^>]+>/g, '').trim() : null;

  // Hero content check
  const isHero = className.includes('flex_content_hero') || className.includes('rich_image');

  // Extract cards
  const liMatches = [...body.matchAll(/<li[^>]*data-title="([^"]+)"[^>]*>([\s\S]*?)<\/li>/gi)];
  const cards = [];

  liMatches.forEach(li => {
    const dataTitle = li[1];
    const liBody = li[2];

    const dataSrc = (liBody.match(/data-src="([^">]+)"/) || [])[1];
    const src = (liBody.match(/src="([^">]+)"/) || [])[1];
    const href = (liBody.match(/href="([^">]+)"/) || [])[1];

    const titleEl = (liBody.match(/<div[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/div>/i) || [])[1];
    const descEl = (liBody.match(/<div[^>]*class="[^"]*(?:desc|subhead|caption|body-copy)[^"]*"[^>]*>([\s\S]*?)<\/div>/i) || [])[1];
    const ctaEl = (liBody.match(/<ul[^>]*class="link-container"[^>]*>([\s\S]*?)<\/ul>/i) || [])[1];
    const btnText = ctaEl ? ctaEl.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : null;

    // Aspect ratio
    const aspectMatch = liBody.match(/style="padding-bottom:([^"%]+%?)"/i);
    const aspect = aspectMatch ? aspectMatch[1] : null;

    cards.push({
      dataTitle,
      title: titleEl ? titleEl.replace(/<[^>]+>/g, '').trim() : dataTitle,
      desc: descEl ? descEl.replace(/<[^>]+>/g, '').trim() : '',
      cta: btnText,
      image: (dataSrc || src || '').replace(/&amp;/g, '&'),
      href: href ? href.replace(/&amp;/g, '&') : '#',
      aspect
    });
  });

  // If hero section, extract hero details
  let heroDetails = null;
  if (isHero) {
    const heroBg = (body.match(/data-src="([^">]+)"/) || body.match(/src="([^">]+)"/) || [])[1];
    const logoImg = (body.match(/<img[^>]+class="[^"]*logo[^"]*"[^>]*src="([^">]+)"/) || body.match(/<img[^>]+src="([^">]+logo[^">]+)"/) || [])[1];
    const heroTitle = (body.match(/class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/i) || [])[1];
    const heroDesc = (body.match(/class="[^"]*(?:desc|body-copy|subhead)[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/i) || [])[1];
    const heroBtns = [...body.matchAll(/<a[^>]*class="[^"]*(?:btn|button|cta)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)].map(b => ({
      href: (b[0].match(/href="([^">]+)"/) || [])[1],
      text: b[1].replace(/<[^>]+>/g, '').trim()
    }));

    heroDetails = {
      bg: heroBg ? heroBg.replace(/&amp;/g, '&') : null,
      logo: logoImg ? logoImg.replace(/&amp;/g, '&') : null,
      title: heroTitle ? heroTitle.replace(/<[^>]+>/g, '').trim() : null,
      desc: heroDesc ? heroDesc.replace(/<[^>]+>/g, '').trim() : null,
      buttons: heroBtns
    };
  }

  fullData.push({
    index: idx,
    id,
    className,
    heading,
    columns,
    bgColor,
    isHero,
    heroDetails,
    cardsCount: cards.length,
    cards
  });
});

fs.writeFileSync('all_sections_structured.json', JSON.stringify(fullData, null, 2));
console.log('Structured data saved, total sections:', fullData.length);
