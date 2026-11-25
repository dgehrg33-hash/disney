import express, { Request, Response } from 'express';
import cors from 'cors';
import {
  NAV_ITEMS,
  HERO_BANNER,
  HOMEPAGE_SECTIONS,
  SLIM_BUNDLE_BANNER,
  VISA_REWARDS_BANNER,
  FOOTER_ABOUT_LINKS,
  FOOTER_LEGAL_LINKS,
  SEARCH_CATALOG
} from '../src/data/content';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Content API endpoint
app.get('/api/content', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    data: {
      navigation: NAV_ITEMS,
      hero: HERO_BANNER,
      sections: HOMEPAGE_SECTIONS,
      bundleBanner: SLIM_BUNDLE_BANNER,
      visaBanner: VISA_REWARDS_BANNER,
      footer: {
        about: FOOTER_ABOUT_LINKS,
        legal: FOOTER_LEGAL_LINKS
      }
    }
  });
});

// Search API endpoint
app.get('/api/search', (req: Request, res: Response) => {
  const query = (req.query.q as string || '').toLowerCase().trim();
  if (!query) {
    res.json({ results: SEARCH_CATALOG.slice(0, 5) });
    return;
  }

  const results = SEARCH_CATALOG.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query) ||
    item.year.toLowerCase().includes(query)
  );

  res.json({ results });
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'Disney Recreation API', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Disney Recreation API server running at http://localhost:${PORT}`);
});
