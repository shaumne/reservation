import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import { format } from 'date-fns';

function Reservations() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('new'); // 'new' or 'list'
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [reservations, setReservations] = useState([]);

  const occasions = [
    'Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Other'
  ];

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  useEffect(() => {
    if (activeTab === 'list') {
      fetchReservations();
    }
  }, [activeTab]);

  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/reservations/my-reservations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setReservations(response.data);
    } catch (err) {
      setError('Failed to fetch reservations');
    }
  };

  const handleCancelReservation = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3001/api/reservations/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchReservations();
      setSuccess('Reservation cancelled successfully');
    } catch (err) {
      setError('Failed to cancel reservation');
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'text-yellow-400';
      case 'confirmed':
        return 'text-green-400';
      case 'cancelled':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3001/api/reservations', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Reservation successfully created!');
      setFormData({
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        specialRequests: ''
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create reservation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark"></div>
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Restaurant dining"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h1 className="font-primary text-6xl text-white mb-6">Reservations</h1>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <p className="text-white/80 text-xl max-w-2xl">
            Secure your table for an unforgettable dining experience
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex space-x-4 mb-12">
          <button
            onClick={() => setActiveTab('new')}
            className={`px-6 py-2 rounded transition-colors duration-300 ${
              activeTab === 'new' 
                ? 'bg-gold text-dark' 
                : 'text-gold hover:bg-gold/20'
            }`}
          >
            New Reservation
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-6 py-2 rounded transition-colors duration-300 ${
              activeTab === 'list' 
                ? 'bg-gold text-dark' 
                : 'text-gold hover:bg-gold/20'
            }`}
          >
            My Reservations
          </button>
        </div>

        {activeTab === 'new' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {success && (
                <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded">
                  {success}
                </div>
              )}
              
              {error && (
                <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white/80 mb-2" htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2" htmlFor="time">Time</label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white/80 mb-2" htmlFor="guests">Number of Guests</label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none"
                    required
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2" htmlFor="occasion">Occasion</label>
                  <select
                    id="occasion"
                    value={formData.occasion}
                    onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none"
                  >
                    <option value="">Select occasion (optional)</option>
                    {occasions.map(occasion => (
                      <option key={occasion} value={occasion}>{occasion}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2" htmlFor="specialRequests">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  className="w-full bg-dark-secondary border border-gold/20 rounded p-3 text-white/80 focus:border-gold focus:outline-none"
                  rows="4"
                  placeholder="Any special requests or dietary requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative overflow-hidden px-8 py-3 bg-transparent rounded w-full"
              >
                <span className="absolute inset-0 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative text-gold group-hover:text-dark">
                  {loading ? 'Processing...' : 'Confirm Reservation'}
                </span>
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {success && (
              <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded mb-6">
                {success}
              </div>
            )}
            
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            {reservations.length === 0 ? (
              <div className="text-center text-white/70 py-12">
                <p className="text-xl mb-4">No reservations found</p>
                <button
                  onClick={() => setActiveTab('new')}
                  className="text-gold hover:text-gold-light transition-colors duration-300"
                >
                  Make your first reservation
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {reservations.map((reservation) => (
                  <motion.div
                    key={reservation.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-dark-secondary border border-gold/20 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-4 mb-3">
                          <h3 className="text-white text-xl">
                            {format(new Date(reservation.date), 'MMMM d, yyyy')}
                          </h3>
                          <span className="text-white/60">at</span>
                          <span className="text-white">{reservation.time}</span>
                        </div>
                        
                        {reservation.notes && (
                          <p className="text-white/70 mt-2">
                            Notes: {reservation.notes}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className={`${getStatusColor(reservation.status)} capitalize`}>
                          {reservation.status}
                        </span>
                        
                        {reservation.status === 'pending' && (
                          <button
                            onClick={() => handleCancelReservation(reservation.id)}
                            className="text-red-400 hover:text-red-300 transition-colors duration-300"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Reservations; 