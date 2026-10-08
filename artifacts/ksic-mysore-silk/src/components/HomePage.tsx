'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useKsicMotion } from '../hooks/useKsicMotion';
import Craft from './Craft';
import Collections from './Collections';
import FeaturedProducts from './FeaturedProducts';
import Heritage from './Heritage';
import Hero from './Hero';
import IconSprite from './IconSprite';
import Newsletter from './Newsletter';
import Occasion from './Occasion';
import Services from './Services';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import Topbar from './Topbar';
import TrustStrip from './TrustStrip';
import { products } from './ksic-content';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const [toast, setToast] = useState('');
  const [slide, setSlide] = useState(1);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useKsicMotion(setScrolled);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => current % 3 + 1), 3200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const toggleFavorite = (id: string, name: string) => {
    const alreadySaved = favorites.includes(id);
    setFavorites((items) => alreadySaved ? items.filter((item) => item !== id) : [...items, id]);
    setToast(alreadySaved ? `${name} removed from your wishlist` : `${name} saved to your wishlist`);
  };

  const addToBag = (name: string) => {
    setCart((items) => [...items, name]);
    setToast(`${name} added to your bag`);
  };

  const onSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const searchResults = search.trim()
    ? products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(search.toLowerCase()))
    : [];
  const closeSearch = () => {
    setSearchOpen(false);
    setSearch('');
  };

  return (
    <>
      <IconSprite />
      <a className="skip-link" href="#main">Skip to content</a>
      <Topbar />
      <SiteHeader
        scrolled={scrolled}
        menuOpen={menuOpen}
        searchOpen={searchOpen}
        search={search}
        favoritesCount={favorites.length}
        cartCount={cart.length}
        results={searchResults}
        onSearchToggle={() => setSearchOpen((open) => !open)}
        onSearchChange={setSearch}
        onCloseSearch={closeSearch}
        onOpenMenu={() => setMenuOpen(true)}
        onCloseMenu={() => setMenuOpen(false)}
        onToast={setToast}
      />

      <main id="main">
        <Hero slide={slide} onSlideChange={setSlide} />
        <TrustStrip />
        <Collections />
        <Heritage />
        <Craft />
        <FeaturedProducts favorites={favorites} onToggleFavorite={toggleFavorite} onAddToBag={addToBag} />
        <Occasion />
        <Services />
        <Newsletter email={email} subscribed={subscribed} onEmailChange={setEmail} onSubmit={onSubscribe} />
      </main>
      <SiteFooter />
      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </>
  );
}
