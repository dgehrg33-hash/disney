import React from 'react';
import { HERO_BANNER } from '../data/content';
import { Ticket, Info } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="disney-hero" aria-label="Featured Spotlight">
      <div className="hero-media-wrapper">
        <img
          src={HERO_BANNER.bgImage}
          alt={HERO_BANNER.title}
          className="hero-background-img"
          loading="eager"
        />

        {/* Gradient Overlays */}
        <div className="hero-gradient-overlay" />
        <div className="hero-bottom-gradient" />

        {/* Content Box */}
        <div className="hero-content-container">
          <div className="bound">
            <div className="hero-content-inner">
              {HERO_BANNER.releaseDate && (
                <div className="hero-badge-live">
                  <span className="hero-badge-dot" />
                  <span>{HERO_BANNER.releaseDate}</span>
                </div>
              )}

              {/* Logo */}
              <img
                src={HERO_BANNER.logoImage}
                alt={HERO_BANNER.title}
                className="hero-logo-img"
              />

              <h1 className="hero-tagline">{HERO_BANNER.tagline}</h1>

              <p className="hero-description">{HERO_BANNER.description}</p>

              <div className="hero-actions">
                <a
                  href={HERO_BANNER.primaryCtaLink}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ticket size={18} style={{ marginRight: 8 }} />
                  {HERO_BANNER.primaryCtaText}
                </a>

                <a
                  href={HERO_BANNER.secondaryCtaLink}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Info size={18} style={{ marginRight: 8 }} />
                  {HERO_BANNER.secondaryCtaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
