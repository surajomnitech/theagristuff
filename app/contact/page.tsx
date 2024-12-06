'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-center text-lg">
            Get in touch with us for any inquiries about our products or services. We're here to help!
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

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lime-500 focus:border-lime-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lime-500 focus:border-lime-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lime-500 focus:border-lime-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lime-500 focus:border-lime-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-lime-600 text-white px-8 py-3 rounded-md hover:bg-lime-700 transition-colors"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md text-center">
                Sorry, there was an error sending your message. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}