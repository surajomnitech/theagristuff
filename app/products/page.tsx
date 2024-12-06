'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="products-page">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spice Garden */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/spice_garden.png"
                  alt="Spice Garden"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Spice Garden</h2>
                <p className="text-gray-600 mb-4 text-justify">
                  Discover our premium collection of authentic Sri Lankan spices. From Ceylon Cinnamon to Black Pepper, we offer the finest quality spices for global markets.
                </p>
                <Link 
                  href="/products/spice_garden" 
                  className="inline-block bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition-colors"
                >
                  Explore Spice Garden
                </Link>
              </div>
            </div>
            
            {/* Veg Basket Organic */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/veg_basket.png"
                  alt="Veg Basket Organic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Veg Basket Organic</h2>
                <p className="text-gray-600 mb-4 text-justify">
                  Fresh, organic vegetables sourced from our certified farms. We provide a wide range of seasonal and year-round vegetables that meet international quality standards.
                </p>
                <Link 
                  href="/products/veg_basket" 
                  className="inline-block bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition-colors"
                >
                  Explore Veg Basket
                </Link>
              </div>
            </div>

            {/* Fruit Paradise */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/fruit_platter.png"
                  alt="Fruit Platter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Fruit Platter</h2>
                <p className="text-gray-600 mb-4 text-justify">
                  Experience the exotic flavors of Sri Lankan fruits. Our carefully selected fruits are harvested at peak ripeness to ensure maximum freshness and taste.
                </p>
                <Link 
                  href="/products/fruit_platter" 
                  className="inline-block bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition-colors"
                >
                  Explore Fruit Platter
                </Link>
              </div>
            </div>

            {/* Organico */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src="/farm_shop.png"
                  alt="Farm Shop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Farm Shop</h2>
                <p className="text-gray-600 mb-4 text-justify">
                Experience the finest in premium poultry and fish products. We offer a wide range of farm-fresh eggs, high-quality chicken, fresh seafood, and nutritional feed. Enjoy fresh, healthy, and ethically-sourced products that meet your needs.
                </p>
                <Link 
                  href="/products/farm_shop" 
                  className="inline-block bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition-colors"
                >
                  Explore Farm Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}