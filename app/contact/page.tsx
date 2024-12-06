'use client';
import { useState } from 'react';
import '../styles/contact.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
  const [formData, setFormData] = useState({
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
        setFormData({ subject: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="contact-page">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-center">
            Get in touch with us for any inquiries about our products or services. We're here to help!
          </p>

          <div className="office-info-container">
            <div className="office-info">
              <h2 className="text-2xl font-bold mb-4">SRI LANKAN OFFICE (Head Office)</h2>
              <p>The Agristuff (Pvt)Ltd.</p>
              <p>No.1080/1N, Dharmasoka Mawatha,</p>
              <p>Talangama North, Malabe, Sri Lanka.</p>
              <p>Phone: +94 755 186 186 / +94 702 805 611</p>
              <p>Email: sales@theagristuff.lk</p>
            </div>

            <div className="office-info">
              <h2 className="text-2xl font-bold mb-4">MALDIVES OFFICE</h2>
              <p>Lot No 10203, Hithigas Magu,</p>
              <p>Goalhi 3 Hulhumale,</p>
              <p>Maldives.</p>
              <p>Phone: +96 094 470 29 / +96 074 88 004</p>
              <p>Email: sales@theagristuff.lk</p>
            </div>
          </div>

          <div className="contact-form">
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-button"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-600 mt-4">Message sent successfully! We'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 mt-4">Failed to send message. Please try again or contact us directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}