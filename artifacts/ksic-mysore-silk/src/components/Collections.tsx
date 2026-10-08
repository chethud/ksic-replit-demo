import AssetImage from './AssetImage';
import { collections } from './ksic-content';

export default function Collections() {
  return (
    <section className="section wrap" id="collections">
      <div className="section-heading rv">
        <div><div className="eyebrow">Discover the house</div><h2 className="serif">Collections</h2></div>
        <p>Silk for the ceremonies, celebrations and quiet milestones that become a part of us.</p>
      </div>
      <div className="collections-grid" data-stagger="80">
        {collections.map((collection, index) => (
          <a className="collection rv" href={index === 2 ? '#occasion' : '#signature'} key={collection.name} aria-label={`Discover ${collection.name}`}>
            <AssetImage src={collection.asset} alt={`${collection.name} collection campaign`} className="collection-asset" />
            <span className="fabric-panel" aria-hidden="true" /><span className="collection-shade" />
            <span className="collection-label"><span><strong>{collection.name}</strong><small>{collection.description}</small></span><span className="collection-arrow" aria-hidden="true">→</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}
