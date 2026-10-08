import AssetImage from './AssetImage';

export default function Heritage() {
  return (
    <section className="section wrap heritage" id="heritage">
      <div className="heritage-copy rv">
        <div className="eyebrow">Our heritage</div>
        <h2 className="serif">A Royal<br />Legacy Since<br /><em>1912</em></h2>
        <p>Born from the royal traditions of Mysore, our silk carries a legacy of craftsmanship, purity and timeless elegance.</p>
        <a className="text-link" href="#craft">Discover Our Story →</a>
      </div>
      <div className="heritage-image rv" data-parallax role="img" aria-label="Abstract editorial artwork inspired by Mysore's royal silk heritage">
        <AssetImage src="d8_heritage.jpg" alt="Mysore silk heritage campaign" className="campaign-asset" />
        <span className="image-caption">A legacy, held in every thread.</span>
      </div>
    </section>
  );
}
