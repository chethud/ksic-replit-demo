import AssetImage from './AssetImage';
import Petals from './Petals';

export default function Occasion() {
  return (
    <section className="occasion" id="occasion">
      <AssetImage
        src="d8_occasion.jpg"
        alt="Illustrative generated campaign image of a woman in a burgundy silk saree with a sweeping gold zari pallu, Mallige flowers in her braid and palace pillars behind her."
        className="campaign-asset"
      />
      <div className="occasion-art" data-parallax aria-hidden="true" />
      <Petals variant="occasion" />
      <div className="occasion-content rv">
        <div className="eyebrow">An heirloom for the extraordinary</div>
        <h2 className="serif">Tradition, woven into life's<br />special moments</h2>
        <a className="text-link" href="#collections">Explore Wedding Collection →</a>
      </div>
    </section>
  );
}
