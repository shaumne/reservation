import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/reservations', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setReservations(response.data);
      } catch (err) {
        setError('Failed to fetch reservations');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchReservations();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Reservations</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {reservations.length === 0 ? (
          <p>No reservations found.</p>
        ) : (
          <div className="space-y-4">
            {reservations.map((reservation) => (
              <div key={reservation.id} className="border p-4 rounded">
                <p>Date: {new Date(reservation.date).toLocaleDateString()}</p>
                <p>Time: {reservation.time}</p>
                <p>Status: {reservation.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservations; 