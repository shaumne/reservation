import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-dark border-b border-gold/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/" className="font-primary text-2xl text-gold">LUXE</Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-custom hover:text-gold transition-colors duration-300">About</Link>
              <Link to="/contact" className="text-gray-custom hover:text-gold transition-colors duration-300">Contact</Link>
              {user && (
                <Link to="/reservations" className="text-gray-custom hover:text-gold transition-colors duration-300">
                  Reservations
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <span className="text-gray-custom">{user.email}</span>
                <button
                  onClick={logout}
                  className="bg-dark-secondary text-gold border border-gold px-4 py-2 rounded hover:bg-gold hover:text-dark transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-custom hover:text-gold transition-colors duration-300">
                  Login
                </Link>
                <Link to="/register" 
                  className="bg-gold text-dark px-6 py-2 rounded hover:bg-gold-light transition-colors duration-300">
                  Register
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