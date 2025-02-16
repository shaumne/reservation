import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark"></div>
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Restaurant interior"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h1 className="font-primary text-6xl text-white mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <p className="text-white/80 text-xl max-w-2xl">
            A legacy of culinary excellence spanning three decades
          </p>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-primary text-gold text-3xl mb-6">Our Philosophy</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              At LUXE, we believe that dining is more than just a meal – it's an experience that engages all the senses. Our commitment to excellence is reflected in every detail, from our carefully curated menu to our sophisticated ambiance.
            </p>
            <p className="text-white/70 leading-relaxed">
              Each dish tells a story of tradition, innovation, and the finest ingredients sourced from around the world. Our expert chefs combine classical techniques with contemporary creativity to create unforgettable culinary experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                className="object-cover"
                alt="Chef preparing food"
              />
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="font-primary text-gold text-3xl mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Michael Laurent",
                role: "Executive Chef",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Chen",
                role: "Head Sommelier",
                image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "James Wilson",
                role: "Pastry Chef",
                image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={member.image}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      alt={member.name}
                    />
                  </div>
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-primary text-white text-xl mb-1">{member.name}</h3>
                <p className="text-gold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About; 