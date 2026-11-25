import React from 'react';
import { FOOTER_ABOUT_LINKS, FOOTER_LEGAL_LINKS } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer id="goc-ft" className="goc-footer" role="contentinfo">
      <div className="bound">
        <div className="goc-footer-inner">
          {/* Disney Classic Script Logo */}
          <a href="/" className="goc-footer-logo" aria-label="Disney Home">
            <img
              src="/assets/disney_logo_dark.png"
              alt="Disney"
              className="goc-footer-logo-img"
            />
          </a>

          {/* Primary About Navigation */}
          <ul id="goc-ft-about" className="goc-footer-links" aria-label="About Disney Links">
            {FOOTER_ABOUT_LINKS.map((link, idx) => (
              <li key={idx} className="goc-footer-link-item">
                <a
                  href={link.href}
                  className="goc-footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Secondary Legal & Privacy Links */}
          <ul id="goc-ft-legal" className="goc-footer-legal-links" aria-label="Legal & Privacy Links">
            {FOOTER_LEGAL_LINKS.map((link, idx) => (
              <li key={idx} className="goc-footer-legal-link-item">
                <a
                  href={link.href}
                  className={`goc-footer-legal-link ${link.title === 'Your Privacy Choices' ? 'privacy-choices-icon' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright Notice */}
          <div id="goc-ft-copyright" className="goc-footer-copyright">
            © 2026 Disney and its related entities
          </div>
        </div>
      </div>
    </footer>
  );
};
