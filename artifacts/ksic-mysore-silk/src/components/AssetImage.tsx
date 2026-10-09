interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const availableAssets = new Set([
  'd8_hero.jpg',
  'd8_heritage.jpg',
  'loom.jpg',
  'd8_occasion.jpg',
  'col_sarees.jpg',
  'col_festive.jpg',
  'col_wedding.jpg',
  'col_menswear.jpg',
  'col_gifts.jpg',
  'prod_red.jpg',
  'prod_cream.jpg',
  'prod_green.jpg',
  'prod_purple.jpg',
]);

export default function AssetImage({ src, alt, className = '', priority = false }: AssetImageProps) {
  if (!availableAssets.has(src)) return null;
  return (
    <img
      className={className}
      src={`/ksic/assets/${src}`}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
