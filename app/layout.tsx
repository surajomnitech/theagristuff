import { Metadata } from 'next';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './styles/theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | The Agristuff',
    default: 'The Agristuff - Sri Lankan Agricultural Exports'
  },
  description: 'Premium Sri Lankan agricultural exports including organic fruits, vegetables, and spices. Fair Trade certified with EU organic certification.',
  keywords: 'Sri Lankan agriculture, organic products, exports, spices, fruits, vegetables',
  authors: [{ name: 'The Agristuff' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}