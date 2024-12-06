import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Products - The Agristuff',
    default: 'Our Products - The Agristuff'
  },
  description: 'Explore our range of premium Sri Lankan agricultural products including spices, fruits, and vegetables.',
  keywords: 'Sri Lankan spices, organic fruits, organic vegetables, agricultural exports',
  openGraph: {
    title: 'Premium Sri Lankan Agricultural Products',
    description: 'Discover our range of high-quality agricultural products from Sri Lanka.',
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="products-layout">
      {children}
    </div>
  );
}