import Icon from './Icon';
import { navigation, type Product } from './ksic-content';

interface SiteHeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
  search: string;
  favoritesCount: number;
  cartCount: number;
  results: Product[];
  onSearchToggle: () => void;
  onSearchChange: (value: string) => void;
  onCloseSearch: () => void;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  onToast: (message: string) => void;
}

export default function SiteHeader({
  scrolled,
  menuOpen,
  searchOpen,
  search,
  favoritesCount,
  cartCount,
  results,
  onSearchToggle,
  onSearchChange,
  onCloseSearch,
  onOpenMenu,
  onCloseMenu,
  onToast,
}: SiteHeaderProps) {
  const showBag = () => onToast(cartCount
    ? `${cartCount} piece${cartCount === 1 ? '' : 's'} in your bag`
    : 'Your bag is currently empty');

  return (
    <>
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="nav">
        <a className="logo" href="#top" aria-label="KSIC Mysore Silk home">
          <img src="/ksic/assets/ksic_logo.png" alt="KSIC Mysore Silk" />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map(([label, target]) => <a className="nav-link" key={label} href={target}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Open search" data-testid="button-search" onClick={onSearchToggle}><Icon name="search" /></button>
          <button className="icon-button" aria-label="Account" data-testid="button-account" onClick={() => onToast('Your KSIC account is coming soon')}><Icon name="user" /></button>
          <button className="icon-button" aria-label={`Wishlist, ${favoritesCount} saved`} data-testid="button-wishlist" onClick={() => onToast(favoritesCount ? `${favoritesCount} piece${favoritesCount === 1 ? '' : 's'} in your wishlist` : 'Your wishlist is waiting for a favourite')}><Icon name="heart" />{favoritesCount > 0 && <span className="count">{favoritesCount}</span>}</button>
          <button className="icon-button" aria-label={`Shopping bag, ${cartCount} items`} data-testid="button-cart" onClick={showBag}><Icon name="bag" />{cartCount > 0 && <span className="count">{cartCount}</span>}</button>
        </div>
        <div className="mobile-controls">
          <button className="menu-toggle" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={onOpenMenu} data-testid="button-menu"><Icon name="menu" /></button>
          <button className="icon-button" aria-label={`Shopping bag, ${cartCount} items`} onClick={showBag}><Icon name="bag" />{cartCount > 0 && <span className="count">{cartCount}</span>}</button>
        </div>
      </div>
      {searchOpen && <div className="search-panel">
        <div className="search-inner">
          <Icon name="search" />
          <input autoFocus type="search" value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search the collection" aria-label="Search collection" />
          <button className="icon-button" aria-label="Close search" onClick={onCloseSearch}><Icon name="close" /></button>
        </div>
        <div className="search-hint" aria-live="polite">
          {search.trim() ? results.length
            ? <div className="search-results">{results.map((result) => <a key={result.id} href="#signature" onClick={onCloseSearch}>{result.name}<span>{result.price} →</span></a>)}</div>
            : 'No pieces found. Try “silk” or “saree”.'
            : 'Explore signature Mysore silk sarees and heirloom pieces.'}
        </div>
      </div>}
    </header>
    <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
      <div className="menu-head">
        <a className="logo" href="#top" onClick={onCloseMenu} aria-label="KSIC Mysore Silk home"><img src="/ksic/assets/ksic_logo.png" alt="" /></a>
        <button className="icon-button" aria-label="Close navigation menu" onClick={onCloseMenu}><Icon name="close" /></button>
      </div>
      <nav className="menu-links" aria-label="Mobile navigation">
        {navigation.map(([label, target]) => <a key={label} href={target} onClick={onCloseMenu}>{label}</a>)}
      </nav>
      <div className="menu-foot">KARNATAKA SILK INDUSTRIES CORPORATION</div>
    </div>
    </>
  );
}
