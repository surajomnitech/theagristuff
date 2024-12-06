'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';

import '../styles/products.css';

export default function Products() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="products-page">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
          
          <div className="categories-grid">
            {/* Spice Garden */}
            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/spice_garden.png"
                  alt="Spice Garden"
                  width={600}
                  height={400}
                  objectFit="cover"
                />
              </div>
              <div className="category-content">
                <h2 className="text-2xl font-bold mb-2">Spice Garden</h2>
                <p className="mb-4">Discover our premium collection of authentic Sri Lankan spices. From Ceylon Cinnamon to Black Pepper, we offer the finest quality spices for global markets.</p>
                <Link href="/products/spice_garden" className="category-button">Explore Spice Garden</Link>
              </div>
            </div>
            
            {/* Veg Basket Organic */}
            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/veg_basket.png"
                  alt="Veg Basket Organic"
                  width={600}
                  height={400}
                  objectFit="cover"
                />
              </div>
              <div className="category-content">
                <h2 className="text-2xl font-bold mb-2">Veg Basket Organic</h2>
                <p className="mb-4">Fresh, certified organic vegetables delivered from our farms to your table. Our organic vegetable selection ensures healthy, pesticide-free produce.</p>
                <Link href="/products/veg_basket" className="category-button">Explore Veg Basket</Link>
              </div>
            </div>

            {/* Fruit Platter */}
            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/fruit_platter.png"
                  alt="Fruit Platter"
                  width={600}
                  height={400}
                  objectFit="cover"
                />
              </div>
              <div className="category-content">
                <h2 className="text-2xl font-bold mb-2">Fruit Platter</h2>
                <p className="mb-4">Savor the exotic flavors of Sri Lankan fruits. Our selection includes tropical delights like mangoes, papayas, and more, all carefully harvested and exported.</p>
                <Link href="/products/fruit_platter" className="category-button">Explore Fruit Platter</Link>
              </div>
            </div>
            
            {/* Farm Shop */}
            <div className="category-card">
              <div className="category-image">
                <Image
                  src="/farm_shop.png"
                  alt="Farm Shop"
                  width={600}
                  height={400}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="category-content">
                <h2 className="text-2xl font-bold mb-2">Farm Shop</h2>
                <p className="mb-4">Experience the freshness of locally sourced agricultural products. Our farm shop offers a wide range of traditional Sri Lankan farming essentials and organic products.</p>
                <Link href="/products/farm_shop" className="category-button">Explore Farm Shop</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}