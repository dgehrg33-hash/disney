import React, { useState, useEffect, useRef } from 'react';
import { SEARCH_CATALOG } from '../data/content';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(SEARCH_CATALOG.slice(0, 5));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults(SEARCH_CATALOG.slice(0, 5));
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.trim()) {
      setResults(SEARCH_CATALOG.slice(0, 5));
      return;
    }
    const filtered = SEARCH_CATALOG.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()) ||
      item.type.toLowerCase().includes(text.toLowerCase())
    );
    setResults(filtered);
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search size={22} color="#0063e5" />
          <input
            ref={inputRef}
            type="text"
            className="search-input-field"
            placeholder="Search Disney movies, parks, characters, merchandise..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query && (
            <button
              className="search-clear-btn"
              onClick={() => handleSearch('')}
              aria-label="Clear Search Input"
            >
              <X size={18} />
            </button>
          )}
          <button
            className="search-close-btn"
            onClick={onClose}
            aria-label="Close Search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Pill Suggestions */}
        <div className="search-suggestions">
          <div className="search-suggestions-label">Popular Searches</div>
          <div className="search-pills">
            {['Hexed', 'Percy Jackson', 'Moana', 'Toy Story 5', 'Walt Disney World', 'Disney+ Hulu'].map((pill) => (
              <button
                key={pill}
                className="search-pill"
                onClick={() => handleSearch(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="search-results-container">
          {results.length > 0 ? (
            results.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="search-result-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="search-result-thumb"
                />
                <div className="search-result-info">
                  <div className="search-result-title">{item.title}</div>
                  <div className="search-result-meta">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: '#6b7280' }}>
              No Disney results found for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
