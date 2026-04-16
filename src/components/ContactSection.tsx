'use client';

import { FormEvent, useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with your actual email service (e.g., Emailjs, SendGrid, etc.)
      // For now, just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="bg-white py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">GET IN TOUCH</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-b-2 border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50"
              >
                {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              
              {status === 'success' && (
                <p className="text-green-600 font-semibold">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-semibold">Error sending message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">LOCATION</h3>
              <p className="text-xl text-black">New South Wales, Australia</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">PHONE</h3>
              <a href="tel:+61490331146" className="text-xl text-black hover:text-blue-600 transition-colors">
                +61 490 331 146
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">EMAIL</h3>
              <a href="mailto:contact@example.com" className="text-xl text-black hover:text-blue-600 transition-colors">
                contact@example.com
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-4">PROFESSIONAL LINKS</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title="LinkedIn"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  title="GitHub"
                >
                  <span className="text-lg">GH</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
