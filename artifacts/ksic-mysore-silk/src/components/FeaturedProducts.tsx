import AssetImage from './AssetImage';
import Icon from './Icon';
import { products, type Product } from './ksic-content';

interface FeaturedProductsProps {
  favorites: string[];
  onToggleFavorite: (id: string, name: string) => void;
  onAddToBag: (name: string) => void;
}

export default function FeaturedProducts({ favorites, onToggleFavorite, onAddToBag }: FeaturedProductsProps) {
  return (
    <section className="section wrap" id="signature">
      <div className="section-heading products-head rv">
        <div><div className="eyebrow">The collection</div><h2 className="serif">Signature Pieces</h2></div>
        <p>Woven to be worn, treasured and passed on.</p>
      </div>
      <div className="product-grid" data-stagger="70">
        {products.map((product: Product) => (
          <article className="product rv" key={product.id} data-testid={`card-product-${product.id}`}>
            <div className="product-art">
              <AssetImage src={product.asset} alt={product.imageAlt} className="product-asset" />
              <div className="product-fabric" aria-hidden="true" />
              <div className="product-actions">
                <button className="icon-button" aria-label={`${favorites.includes(product.id) ? 'Remove' : 'Add'} ${product.name} ${favorites.includes(product.id) ? 'from' : 'to'} wishlist`} data-testid={`button-favorite-${product.id}`} onClick={() => onToggleFavorite(product.id, product.name)}><Icon name="heart" /></button>
              </div>
            </div>
            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-bottom"><span>{product.price}</span><button className="add-bag" onClick={() => onAddToBag(product.name)} data-testid={`button-add-${product.id}`}><Icon name="bag" /> Add to bag</button></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
