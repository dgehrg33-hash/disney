import React, { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';

import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/modals.css';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="disney-app-root">
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <Home />

      <Footer />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
};

export default App;
