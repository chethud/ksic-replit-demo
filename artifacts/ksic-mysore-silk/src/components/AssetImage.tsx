interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
}

// The uploaded materials include the KSIC logo but not the campaign/product
// photography named in the brief. Add filenames here once the original assets
// are supplied; the CSS artwork remains visible in the meantime.
const suppliedPhotoAssets = new Set<string>();

export default function AssetImage({ src, alt, className = '' }: AssetImageProps) {
  if (!suppliedPhotoAssets.has(src)) return null;
  return <img className={className} src={`/ksic/assets/${src}`} alt={alt} loading="lazy" />;
}
