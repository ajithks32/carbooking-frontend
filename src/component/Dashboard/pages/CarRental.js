import React, { useEffect, useState } from "react";
import axios from "axios";
import "./carrental.css";

const CarRental = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/rental/all");
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to fetch bookings. Please try again later.");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div className="container"><h2>Loading...</h2></div>;
  if (error) return <div className="container"><h2>{error}</h2></div>;

  const today = new Date().toISOString().split("T")[0];

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const todayBookings = bookings.filter((booking) =>
    booking.createdAt.startsWith(today)
  );

  return (
    <div className="container">
      <h1 className="text-primary">Car Rental Bookings</h1>

      {/* Today's Bookings */}
      <h2 >Today's Bookings</h2>
      {todayBookings.length === 0 ? (
        <p>No bookings for today.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Model</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Pickup</th>
              <th>Drop-off</th>
              <th>Duration</th>
              <th>Booking Time</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {todayBookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.bookingId}</td>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.model}</td>
                <td>{booking.selectedPlan}</td>
                <td>₹{booking.amount}</td>
                <td>{booking.pickupLocation}</td>
                <td>{booking.dropoffLocation}</td>
                <td>{booking.rentalDuration}</td>
                <td>{formatDateTime(booking.createdAt)}</td>
                <td>
                  {booking.file ? (
                    <a
                      href={`http://localhost:5000/uploads/${booking.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </a>
                  ) : (
                    "No file"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* All Bookings */}
      <h2>All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Model</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Pickup</th>
              <th>Drop-off</th>
              <th>Duration</th>
              <th>Booking Time</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.bookingId}</td>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.model}</td>
                <td>{booking.selectedPlan}</td>
                <td>₹{booking.amount}</td>
                <td>{booking.pickupLocation}</td>
                <td>{booking.dropoffLocation}</td>
                <td>{booking.rentalDuration}</td>
                <td>{formatDateTime(booking.createdAt)}</td>
                <td>
                  {booking.file ? (
                    <a
                      href={`http://localhost:5000/uploads/${booking.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </a>
                  ) : (
                    "No file"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CarRental;
