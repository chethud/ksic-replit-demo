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
      <div className="heritage-image rv" data-parallax>
        <AssetImage
          src="d8_heritage.jpg"
          alt="Illustrative generated portrait of a woman in an ivory silk saree with a gold zari border, gold jewellery and Mallige flowers in her hair."
          className="campaign-asset"
        />
        <span className="image-caption">A legacy, held in every thread.</span>
      </div>
    </section>
  );
}
