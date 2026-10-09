export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  asset: string;
  imageAlt: string;
}

export interface Collection {
  name: string;
  description: string;
  asset: string;
  imageAlt: string;
}

export const navigation: ReadonlyArray<readonly [string, string]> = [
  ['Shop', '#signature'],
  ['Collections', '#collections'],
  ['Wedding', '#occasion'],
  ['Festive', '#collections'],
  ['Menswear', '#collections'],
  ['Our Heritage', '#heritage'],
  ['About', '#craft'],
];

export const products: Product[] = [
  { id: 'crimson', category: 'Mysore Silk', name: 'Royal Crimson Silk Saree', price: '₹24,500', asset: 'prod_red.jpg', imageAlt: 'Illustrative generated image of a folded crimson silk saree with gold zari and the Gandaberunda motif, arranged with jasmine.' },
  { id: 'ivory', category: 'Mysore Silk', name: 'Ivory Gold Zari Saree', price: '₹28,900', asset: 'prod_cream.jpg', imageAlt: 'Illustrative generated image of a folded ivory silk saree with a gold Gandaberunda zari border and jasmine.' },
  { id: 'emerald', category: 'Mysore Silk', name: 'Emerald Heirloom Saree', price: '₹26,800', asset: 'prod_green.jpg', imageAlt: 'Illustrative generated image of a folded emerald silk saree with gold zari and the Gandaberunda motif, arranged with jasmine.' },
  { id: 'plum', category: 'Mysore Silk', name: 'Evening Plum Silk Saree', price: '₹25,600', asset: 'prod_purple.jpg', imageAlt: 'Illustrative generated image of a folded plum silk saree with gold zari and a peacock-inspired border, arranged with jasmine.' },
];

export const collections: Collection[] = [
  { name: 'Sarees', description: 'A legacy in every drape', asset: 'col_sarees.jpg', imageAlt: 'Illustrative generated campaign image of a woman in a crimson silk saree with gold zari and a Gandaberunda motif.' },
  { name: 'Festive', description: 'For days that shine', asset: 'col_festive.jpg', imageAlt: 'Illustrative generated campaign image of a woman in an emerald silk saree with gold zari and jasmine in her hair.' },
  { name: 'Wedding', description: 'Made for the moment', asset: 'col_wedding.jpg', imageAlt: 'Illustrative generated campaign image of a bride in a crimson silk saree with gold zari and Mallige woven through her braid.' },
  { name: 'Menswear', description: 'The considered classic', asset: 'col_menswear.jpg', imageAlt: 'Illustrative generated campaign image of a man in ivory traditional menswear with a gold-bordered dhoti in a palace arcade.' },
  { name: 'Gifts', description: 'A keepsake of Karnataka', asset: 'col_gifts.jpg', imageAlt: 'Illustrative generated image of a crimson silk saree in a gift box, with a gold Gandaberunda motif and jasmine flowers.' },
];
