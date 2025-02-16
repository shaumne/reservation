import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully!');
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark"></div>
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Restaurant ambiance"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h1 className="font-primary text-6xl text-white mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <p className="text-white/80 text-xl max-w-2xl">
            We'd love to hear from you
          </p>
        </motion.div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus && (
                <div className="bg-gold/20 border border-gold text-gold px-4 py-3 rounded">
                  {formStatus}
                </div>
              )}
              
              <div>
                <label className="block text-white/80 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none transition-colors duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden px-6 py-3 bg-transparent rounded"
              >
                <span className="absolute inset-0 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative text-gold group-hover:text-dark">Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-primary text-gold text-2xl mb-4">Location</h2>
              <p className="text-white/70">123 Luxury Avenue</p>
              <p className="text-white/70">New York, NY 10001</p>
            </div>

            <div>
              <h2 className="font-primary text-gold text-2xl mb-4">Hours</h2>
              <p className="text-white/70">Monday - Friday: 5:00 PM - 11:00 PM</p>
              <p className="text-white/70">Saturday - Sunday: 4:00 PM - 12:00 AM</p>
            </div>

            <div>
              <h2 className="font-primary text-gold text-2xl mb-4">Contact</h2>
              <p className="text-white/70">Phone: (212) 555-0123</p>
              <p className="text-white/70">Email: reservations@luxe.com</p>
            </div>

            <div className="pt-6">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976404924044!3d40.69766374873451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645004417945!5m2!1sen!2s" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 