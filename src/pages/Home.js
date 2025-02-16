import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark"></div>
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Luxury restaurant interior"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10 mt-20"
        >
          <div className="max-w-4xl">
            <h1 className="font-primary text-7xl text-white mb-8 leading-tight">
              Where Every Meal
              <span className="text-gold"> Becomes</span> a Memory
            </h1>
            <p className="text-white/80 text-xl mb-12 max-w-2xl">
              Experience the perfect blend of culinary artistry and luxurious ambiance
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full px-8 py-4 bg-transparent"
            >
              <span className="absolute inset-0 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative text-gold group-hover:text-dark text-lg font-medium">
                Reserve Your Table
              </span>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  alt="Cuisine"
                />
              </div>
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="font-primary text-gold text-2xl mb-4">Culinary Excellence</h3>
            <p className="text-white/70">
              Each dish is a masterpiece, crafted with precision and passion by our world-renowned chefs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  alt="Ambiance"
                />
              </div>
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="font-primary text-gold text-2xl mb-4">Elegant Atmosphere</h3>
            <p className="text-white/70">
              Immerse yourself in an ambiance of sophistication and timeless luxury.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  alt="Service"
                />
              </div>
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="font-primary text-gold text-2xl mb-4">Impeccable Service</h3>
            <p className="text-white/70">
              Experience personalized attention that anticipates your every desire.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home; 