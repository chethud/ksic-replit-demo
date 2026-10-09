import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Mysore Silk — A Timeless Heritage | KSIC',
  description:
    'Discover authentic Mysore Silk from KSIC — a royal Karnataka heritage of craftsmanship, purity and timeless elegance since 1912.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Mysore Silk — A Timeless Heritage | KSIC',
    description:
      'Discover authentic Mysore Silk from KSIC — a royal Karnataka heritage of craftsmanship, purity and timeless elegance since 1912.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mysore Silk — A Timeless Heritage | KSIC',
    description:
      'Discover authentic Mysore Silk from KSIC — a royal Karnataka heritage of craftsmanship, purity and timeless elegance since 1912.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
