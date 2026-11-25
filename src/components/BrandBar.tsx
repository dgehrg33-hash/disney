import React from 'react';
import { BRAND_HUBS } from '../data/content';

export const BrandBar: React.FC = () => {
  return (
    <div className="brand-hubs-container" aria-label="Disney Brands">
      <div className="bound">
        <div className="brand-hubs-grid">
          {BRAND_HUBS.map((brand, idx) => (
            <div
              key={idx}
              className="brand-hub-card"
              style={{ background: brand.bg }}
              title={brand.name}
            >
              <span className="brand-hub-title">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
