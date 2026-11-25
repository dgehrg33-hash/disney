import React from 'react';
import { SectionData } from '../data/content';
import { ContentCard } from './ContentCard';

interface ContentSectionProps {
  section: SectionData;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
  const isLightText = section.theme === 'dark' || section.theme === 'midnight';

  return (
    <section
      id={section.id}
      className={`content-section section-theme-${section.theme}`}
      style={{ backgroundColor: section.backgroundColor }}
      aria-label={section.title || 'Disney Content Section'}
    >
      <div className="bound">
        {/* Optional Logo Header (e.g. Celebrate the Magic) */}
        {section.headerLogo && (
          <div className="section-logo-header">
            <img
              src={section.headerLogo}
              alt={section.title || 'Disney Feature'}
              className="section-header-logo-img"
            />
          </div>
        )}

        {/* Optional Section Title */}
        {section.title && !section.headerLogo && (
          <div className="section-header">
            <h2 className={`section-title ${isLightText ? 'light' : ''}`}>
              {section.title}
            </h2>
          </div>
        )}

        {/* Content Grid */}
        <div className={`content-grid grid-cols-${section.columns || 4}`}>
          {section.cards.map((card) => (
            <ContentCard
              key={card.id}
              card={card}
              theme={section.theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
