'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import productsData from '../../data/products.json';
import '../../styles/products.css';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const categoryData = productsData[category as keyof typeof productsData];

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="products-page">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">{categoryData.title}</h1>
          
          <div className="products-grid">
            {categoryData.products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={product.id === categoryData.products[0].id}
                  />
                </div>
                <div className="product-content">
                  <h2 className="product-title">{product.name}</h2>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}