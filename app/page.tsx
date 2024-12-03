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
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-gray-600">
          This is where your main content will go. Add whatever sections you need here.
        </p>
      </div>
      <Footer />
    </main>
  );
}
