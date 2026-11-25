import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, MOBILE_QUICK_NAV, NavItem } from '../data/content';
import { Search, User, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(prev => (prev === id ? null : id));
  };

  return (
    <header className={`goc-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="goc-main-nav">
        {/* Mobile Hamburger Button */}
        <button
          className="goc-mobile-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <Menu size={24} />
        </button>

        {/* Disney Official Logo */}
        <a href="/" className="goc-logo-link" aria-label="Disney Home">
          <img
            src="/assets/disney_logo_dark.png"
            alt="Disney"
            className="goc-logo-img"
          />
        </a>

        {/* Desktop Primary Navigation */}
        <nav className="goc-nav-links" aria-label="Main Navigation">
          {NAV_ITEMS.map((item: NavItem) => (
            <div key={item.id} className="goc-nav-item">
              <a href={item.href} className="goc-nav-anchor">
                <span>{item.title}</span>
                {item.dropdown && <ChevronDown size={14} className="nav-chevron" />}
              </a>

              {item.dropdown && (
                <div className="goc-dropdown" role="menu">
                  {item.dropdown.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.href}
                      className="goc-dropdown-item"
                      role="menuitem"
                    >
                      <span>{sub.title}</span>
                      {sub.badge && (
                        <span className="goc-dropdown-badge">{sub.badge}</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Controls: Search & Login */}
        <div className="goc-right-controls">
          <button
            className="goc-search-btn"
            onClick={onOpenSearch}
            aria-label="Search Disney"
            title="Search"
          >
            <Search size={20} />
          </button>

          <button
            className="goc-login-btn"
            onClick={onOpenLogin}
            aria-label="Log In with MyDisney"
          >
            <User size={18} />
            <span><u>Log In</u></span>
          </button>
        </div>
      </div>

      {/* Property Sub-Navigation Bar (Mobile & Tablet) */}
      <div className="property-nav-bar" aria-label="Quick Categories">
        <ul className="property-nav-list">
          {MOBILE_QUICK_NAV.map((item, idx) => (
            <li key={idx} className="property-nav-item">
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Slide-Out Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img
            src="/assets/disney_logo_dark.png"
            alt="Disney"
            height={30}
          />
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="mobile-nav-group">
              {item.dropdown ? (
                <>
                  <button
                    className="mobile-nav-title"
                    onClick={() => toggleSubmenu(item.id)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: openSubmenu === item.id ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>
                  {openSubmenu === item.id && (
                    <div className="mobile-nav-subitems">
                      {item.dropdown.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          className="mobile-nav-subitem"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="mobile-nav-title"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <button
            className="btn-primary"
            style={{ width: '100%', marginBottom: '12px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLogin();
            }}
          >
            Log In with MyDisney
          </button>
          <button
            className="btn-secondary"
            style={{ width: '100%', color: '#111', borderColor: '#ccc' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
          >
            Search Everything
          </button>
        </div>
      </div>
    </header>
  );
};
