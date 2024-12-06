'use client';

import Image from 'next/image';
import Link from 'next/link';
import productsData from '../data/products.json';

type CategoryPageContentProps = {
  category: string;
};

export default function CategoryPageContent({ category }: CategoryPageContentProps) {
  const categoryData = productsData[category as keyof typeof productsData];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The product category you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/products" 
            className="inline-block bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition-colors"
          >
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">{categoryData.title}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categoryData.products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={product.id === categoryData.products[0].id}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600 text-justify mb-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/products" 
              className="inline-flex items-center bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition-colors"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
