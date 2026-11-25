import React from 'react';
import { Hero } from '../components/Hero';
import { BrandBar } from '../components/BrandBar';
import { ContentSection } from '../components/ContentSection';
import { BundleBanner, VisaBanner } from '../components/SlimBanner';
import { HOMEPAGE_SECTIONS } from '../data/content';

export const Home: React.FC = () => {
  const featuredRow = HOMEPAGE_SECTIONS.find(s => s.id === 'featured-row');
  const holidaySection = HOMEPAGE_SECTIONS.find(s => s.id === 'celebrate-the-magic');
  const disneyPlusSection = HOMEPAGE_SECTIONS.find(s => s.id === 'explore-more-disneyplus');
  const parksSection = HOMEPAGE_SECTIONS.find(s => s.id === 'vacation-with-disney-parks');
  const partnersSection = HOMEPAGE_SECTIONS.find(s => s.id === 'disney-partners');

  return (
    <main className="disney-main-content">
      {/* 1. Main Hero Banner: Hexed */}
      <Hero />

      {/* 2. Sub-Brand Hubs */}
      <BrandBar />

      {/* 3. Featured 4-Card Grid (Percy Jackson S3, Moana, Disney Store, WDW) */}
      {featuredRow && <ContentSection section={featuredRow} />}

      {/* 4. Celebrate the Magic Holiday Section (Midnight Blue) */}
      {holidaySection && <ContentSection section={holidaySection} />}

      {/* 5. Explore More Disney+ Section (Deep Teal/Dark Blue) */}
      {disneyPlusSection && <ContentSection section={disneyPlusSection} />}

      {/* 6. Vacation with Disney Parks Section */}
      {parksSection && <ContentSection section={parksSection} />}

      {/* 7. The Disney Bundle Slim Promotional Banner */}
      <BundleBanner />

      {/* 8. Disney Partners Section */}
      {partnersSection && <ContentSection section={partnersSection} />}

      {/* 9. Disney Inspire Visa Rewards Promo Banner */}
      <VisaBanner />
    </main>
  );
};
