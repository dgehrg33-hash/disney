import React from 'react';
import { ContentCardItem } from '../data/content';
import { ChevronRight } from 'lucide-react';

interface ContentCardProps {
  card: ContentCardItem;
  theme?: 'light' | 'dark' | 'midnight';
}

export const ContentCard: React.FC<ContentCardProps> = ({ card, theme = 'light' }) => {
  const isDark = theme === 'dark' || theme === 'midnight';

  return (
    <article className="content-card">
      <div className={`card-image-wrapper ${card.aspectRatio}`}>
        {card.category && (
          <span className="card-badge">{card.category}</span>
        )}
        <img
          src={card.image}
          alt={card.title}
          className="card-image"
          loading="lazy"
        />
      </div>

      <div className={`card-body ${isDark ? 'dark' : ''}`}>
        <h3 className="card-title">{card.title}</h3>

        <p className="card-description">{card.description}</p>

        <div className="card-cta-wrapper">
          <a
            href={card.ctaLink}
            className="card-cta-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{card.ctaText}</span>
            <ChevronRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
};
