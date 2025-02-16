import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState, useEffect } from 'react';

function Navbar() {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-16">
            <Link to="/" className="group">
              <span className="font-primary text-3xl text-white relative">
                LUXE
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/about" className="text-white/80 hover:text-gold transition-colors duration-300 relative group">
                <span>About</span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-gold transition-colors duration-300 relative group">
                <span>Contact</span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {user && (
                <Link to="/reservations" className="text-white/80 hover:text-gold transition-colors duration-300 relative group">
                  <span>Reservations</span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            {user ? (
              <>
                <span className="text-white/80">{user.email}</span>
                <button
                  onClick={logout}
                  className="relative overflow-hidden px-6 py-3 group"
                >
                  <span className="absolute inset-0 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative text-gold group-hover:text-dark">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white/80 hover:text-gold transition-colors duration-300 relative group">
                  <span>Login</span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/register" 
                  className="relative overflow-hidden px-6 py-3 group"
                >
                  <span className="absolute inset-0 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative text-gold group-hover:text-dark">Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 