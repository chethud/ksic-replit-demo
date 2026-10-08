import AssetImage from './AssetImage';

export default function Craft() {
  return (
    <section className="section craft" id="craft">
      <div className="craft-inner wrap">
        <div className="loom-image rv" data-parallax role="img" aria-label="Abstract loom-inspired composition of interlacing silk threads">
          <AssetImage src="loom.jpg" alt="The art of the loom" className="campaign-asset" />
        </div>
        <div className="craft-copy rv">
          <div className="eyebrow">The art of the loom</div>
          <h2 className="serif">Crafted by<br /><em>Generations</em></h2>
          <p>Every thread carries the hands, patience and precision of generations of Mysorean artisans.</p>
          <div className="craft-details"><span><b>01 —</b> Pure natural silk</span><span><b>02 —</b> Pure gold zari</span><span><b>03 —</b> Coded authenticity</span></div>
        </div>
      </div>
    </section>
  );
}
