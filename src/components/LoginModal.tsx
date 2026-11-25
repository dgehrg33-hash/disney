import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setSubmitted(false);
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="login-modal-backdrop" onClick={onClose}>
      <div className="login-modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="login-modal-close"
          onClick={onClose}
          aria-label="Close MyDisney Login"
        >
          <X size={20} />
        </button>

        <img
          src="/assets/disney_logo_dark.png"
          alt="Disney"
          className="login-disney-logo"
        />

        <h2 className="login-modal-title">Sign In with MyDisney</h2>
        <p className="login-modal-subtitle">
          Use one account to access Disney+, Hulu, ESPN, Disney Store, Parks & Resorts, and more.
        </p>

        {submitted ? (
          <div style={{ padding: '24px 0', color: '#16a34a', fontWeight: 700 }}>
            ✓ Welcome to MyDisney! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <input
                type="email"
                required
                className="login-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>

            <button type="submit" className="login-submit-btn">
              Continue
            </button>
          </form>
        )}

        <p className="login-disclaimer">
          By signing in, you agree to the Disney{' '}
          <a href="https://disneytermsofuse.com/" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </a>{' '}
          and acknowledge our{' '}
          <a href="https://privacy.thewaltdisneycompany.com/en/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};
