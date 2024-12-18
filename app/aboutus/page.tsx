import { Metadata } from 'next';
import Image from 'next/image';
import '../styles/about.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Founded in 2001, The Agristuff Pvt Ltd specializes in exporting authentic Sri Lankan agriculture, including organic fruits, vegetables, and spices to global markets.',
  keywords: 'Sri Lankan agriculture, organic products, spice exports, fruit exports, vegetable exports, Organico brand',
  openGraph: {
    title: 'About Us | The Agristuff - Sri Lankan Agricultural Exports',
    description: 'Premium Sri Lankan agricultural exports including organic fruits, vegetables, and spices. Fair Trade certified with EU organic certification.',
    images: [
      {
        url: '/logo.jpeg',
        width: 300,
        height: 150,
        alt: 'The Agristuff Logo',
      }
    ],
  }
};

export default function AboutUs() {
  return (
    <main className="about-page">
      <div className="container mx-auto px-4 py-8">
        <div className="about-content">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          
          <div className="intro-section">
            <div className="text-column">
              <p className="mb-6">
                Founded in 2001, The Agristuff Pvt Ltd is a versatile company based in Colombo, Sri Lanka. We specialize in exporting authentic Sri Lankan agriculture, including fruits, vegetables, and spices, to global markets. Our commitment to delivering high-quality organic and conventional products is supported by our own farms across our picturesque island, allowing us to serve our valued partners and customers year-round.
              </p>
            </div>
            <div className="logo-column">
              <Image
                src="/logo.jpeg"
                alt="The Agristuff Logo"
                width={300}
                height={150}
                priority
                className="main-logo"
              />
            </div>
          </div>

          <div className="text-content">
            <p className="mb-6">
              At The Agristuff, we focus on providing premium organic products that enhance health, sustainability, and quality. Experience the benefits of truly organic products, freshly harvested from our reliable farms, offering vibrant flavors and essential nutrients. Our commitment to eco-friendly practices supports organic farming, contributes to planetary health, preserves biodiversity, and minimizes environmental impact.
            </p>

            <p className="mb-6">
                Social responsibility, compliance, and sustainability are central to our organization. We take pride in our effective practices and the dedication of our &ldquo;unsung heroes&rdquo;&mdash;our network of farmers. Most of our farmers are Fair Trade certified, and our organic products carry EU organic certification.
              </p>

              <div className="organico-section">
                <div className="organico-content">
                  <Image
                    src="/organico_logo.jpeg"
                    alt="Organico Logo"
                    width={200}
                    height={100}
                    priority
                    className="organico-logo"
                  />
                  <p>
                    Our brand &ldquo;Organico&rdquo; is well-regarded among retailers, distributors, wholesalers, and in the hospitality industry, particularly in the European Union, Middle East, and the Maldives.
                  </p>
              </div>
            </div>

            <p className="mb-6">
              At The Agristuff, we are committed to excellence in our products, services, and the value of our relationships.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}