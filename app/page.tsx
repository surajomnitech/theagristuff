import Image from "next/image";
import Header from '@/app/components/header';
import Navbar from '@/app/components/navbar';
import Slider from '@/app/components/slider';
import Footer from '@/app/components/footer';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navbar />
      <Slider />
      <div className="container mx-auto px-4 py-8">
        {/* Your main content goes here */}
        <h1 className="text-4xl font-bold mb-4">Welcome to The Agristuff</h1>
        <p className="text-gray-600">
        Welcome to The Agristuff Pvt Ltd, your trusted partner for premium Sri Lankan agricultural exports since 2001. Based in Colombo, Sri Lanka, we specialize in delivering high-quality, organic, and conventional fruits, vegetables, and spices to global markets. With our own farms across the island, we ensure year-round availability of fresh, nutrient-rich produce that enhances health and sustainability. Our commitment to eco-friendly practices and Fair Trade certified farmers ensures that every product we offer not only supports your well-being but also contributes to a healthier planet. Experience the vibrant flavors of our Organico brand, highly regarded across the European Union, Middle East, and Maldives, and discover the excellence of truly organic products.
        </p>
      </div>
      <Footer />
    </main>
  );
}
