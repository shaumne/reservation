function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-40"
            alt="Luxury restaurant interior"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-primary text-6xl text-white mb-6">
              Experience Fine Dining at Its Best
            </h1>
            <p className="text-gray-custom text-xl mb-8">
              Indulge in an extraordinary culinary journey where every dish tells a story
            </p>
            <button className="bg-gold text-dark px-8 py-3 rounded text-lg hover:bg-gold-light transition-colors duration-300">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-dark-secondary p-8 rounded-lg border border-gold/20">
            <h3 className="font-primary text-gold text-2xl mb-4">Exquisite Cuisine</h3>
            <p className="text-gray-custom">
              Masterfully crafted dishes using the finest ingredients from around the world
            </p>
          </div>
          <div className="bg-dark-secondary p-8 rounded-lg border border-gold/20">
            <h3 className="font-primary text-gold text-2xl mb-4">Premium Service</h3>
            <p className="text-gray-custom">
              Impeccable service that anticipates your every need
            </p>
          </div>
          <div className="bg-dark-secondary p-8 rounded-lg border border-gold/20">
            <h3 className="font-primary text-gold text-2xl mb-4">Elegant Ambiance</h3>
            <p className="text-gray-custom">
              A sophisticated atmosphere perfect for memorable dining experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 