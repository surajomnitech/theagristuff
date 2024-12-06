export default function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-center text-lg">
            Get in touch with us for any inquiries about our products or services. We&apos;re here to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Sri Lankan Office</h2>
              <div className="space-y-2 text-gray-600">
                <p>The Agristuff (Pvt)Ltd.</p>
                <p>No.1080/1N, Dharmasoka Mawatha,</p>
                <p>Talangama North, Malabe,</p>
                <p>Sri Lanka.</p>
                <p className="pt-2">Phone: +94 755 186 186 / +94 702 805 611</p>
                <p>Email: sales@theagristuff.lk</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Maldives Office</h2>
              <div className="space-y-2 text-gray-600">
                <p>Lot No 10203, Hithigas Magu,</p>
                <p>Goalhi 3 Hulhumale,</p>
                <p>Maldives.</p>
                <p className="pt-2">Phone: +96 094 470 29 / +96 074 88 004</p>
                <p>Email: sales@theagristuff.lk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}