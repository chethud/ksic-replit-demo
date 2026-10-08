export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  asset: string;
}

export interface Collection {
  name: string;
  description: string;
  asset: string;
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
  { id: 'crimson', category: 'Mysore Silk', name: 'Royal Crimson Silk Saree', price: '₹24,500', asset: 'prod_red.jpg' },
  { id: 'ivory', category: 'Mysore Silk', name: 'Ivory Gold Zari Saree', price: '₹28,900', asset: 'prod_cream.jpg' },
  { id: 'emerald', category: 'Mysore Silk', name: 'Emerald Heirloom Saree', price: '₹26,800', asset: 'prod_green.jpg' },
  { id: 'plum', category: 'Mysore Silk', name: 'Evening Plum Silk Saree', price: '₹25,600', asset: 'prod_purple.jpg' },
];

export const collections: Collection[] = [
  { name: 'Sarees', description: 'A legacy in every drape', asset: 'col_sarees.jpg' },
  { name: 'Festive', description: 'For days that shine', asset: 'col_festive.jpg' },
  { name: 'Wedding', description: 'Made for the moment', asset: 'col_wedding.jpg' },
  { name: 'Menswear', description: 'The considered classic', asset: 'col_menswear.jpg' },
  { name: 'Gifts', description: 'A keepsake of Karnataka', asset: 'col_gifts.jpg' },
];
