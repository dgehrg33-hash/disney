import React from 'react';
import { SLIM_BUNDLE_BANNER, VISA_REWARDS_BANNER } from '../data/content';
import { ArrowRight, CreditCard } from 'lucide-react';

export const BundleBanner: React.FC = () => {
  return (
    <section className="slim-banner-section" aria-label="Disney Bundle Promotion">
      <div className="bound">
        <div className="bundle-banner-wrapper">
          <img
            src={SLIM_BUNDLE_BANNER.bgImage}
            alt="The Disney Bundle"
            className="bundle-banner-bg"
            loading="lazy"
          />
          <div className="bundle-banner-overlay" />
          <div className="bundle-banner-content">
            <img
              src={SLIM_BUNDLE_BANNER.logoImage}
              alt="Disney+ and Hulu"
              className="bundle-banner-logo"
            />
            <p className="bundle-banner-text">{SLIM_BUNDLE_BANNER.description}</p>
            <div>
              <a
                href={SLIM_BUNDLE_BANNER.ctaLink}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{SLIM_BUNDLE_BANNER.ctaText}</span>
                <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VisaBanner: React.FC = () => {
  return (
    <section className="slim-banner-section" aria-label="Disney Visa Card Promotion">
      <div className="bound">
        <div className="visa-banner-wrapper">
          <img
            src={VISA_REWARDS_BANNER.bgImage}
            alt="Disney Inspire Visa Card"
            className="visa-banner-bg"
            loading="lazy"
          />
          <div className="visa-banner-overlay" />
          <div className="visa-banner-content">
            <span className="visa-eyebrow">{VISA_REWARDS_BANNER.eyebrow}</span>
            <h2 className="visa-heading">{VISA_REWARDS_BANNER.heading}</h2>
            <p className="visa-desc">{VISA_REWARDS_BANNER.description}</p>
            <div>
              <a
                href={VISA_REWARDS_BANNER.ctaLink}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CreditCard size={18} style={{ marginRight: 8 }} />
                <span>{VISA_REWARDS_BANNER.ctaText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
