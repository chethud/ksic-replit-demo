import AssetImage from './AssetImage';
import Petals from './Petals';

interface HeroProps {
  slide: number;
  onSlideChange: (slide: number) => void;
}

export default function Hero({ slide, onSlideChange }: HeroProps) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-art" role="img" aria-label="Abstract silk-inspired campaign artwork in deep Mysore maroon and rose">
        <AssetImage src="d8_hero.jpg" alt="Mysore Silk campaign" className="campaign-asset" />
        <div className="silk-visual"><i className="silk-fold fold-one" /><i className="silk-fold fold-two" /></div>
        <span className="hero-art-note">A Mysore original · Since 1912</span>
      </div>
      <Petals variant="hero" />
      <div className="hero-copy">
        <div className="eyebrow">Karnataka's pride</div>
        <h1 className="serif hero-title" id="hero-title">Mysore Silk<em>A Timeless Heritage</em></h1>
        <p className="hero-description">Exquisite weaves from the royal land of Mysore. Tradition, elegance and craftsmanship for generations.</p>
        <a className="primary-link" href="#collections"><span>Explore Collections</span><span className="arrow" aria-hidden="true">→</span></a>
      </div>
      <div className="hero-index">
        <div className="slide-lines" aria-label={`Campaign ${slide} of 3`}>
          {[1, 2, 3].map((number) => <button key={number} type="button" aria-label={`Show campaign ${number}`} aria-pressed={slide === number} className={slide === number ? 'active' : ''} onClick={() => onSlideChange(number)} />)}
        </div>
        <span><b>0{slide}</b>&nbsp; / &nbsp;03</span>
      </div>
    </section>
  );
}
