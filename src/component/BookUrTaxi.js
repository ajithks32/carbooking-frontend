import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom"; 
import axios from "axios";
import "./bookurtaxi.css";
import bg from "../image/page-title.png";

const BookUrTaxi = () => {
  const [selectedType, setSelectedType] = useState("single");
  const [formData, setFormData] = useState({
    model: "",
    startDestination: "",
    endDestination: "",
    name: "",
    email: "",
    phone: "",
    type: "single",
  });

  const location = useLocation();
  const { model } = location.state || {};

  // Set the model if available from state
  React.useEffect(() => {
    if (model) {
      setFormData((prev) => ({ ...prev, model }));
    }
  }, [model]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle booking submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/bookings", formData);
      alert("Booking Successful!");
      console.log(response.data);
  
      // Reset form fields
      setFormData({
        model: model || "",
        startDestination: "",
        endDestination: "",
        name: "",
        email: "",
        phone: "",
        type: "single",
      });
  
      setSelectedType("single"); // Reset radio button state
    } catch (error) {
      console.error("Error booking taxi:", error);
      alert("Failed to book. Please try again.");
    }
  };
  

  return (
    <>
      {/* Background Banner */}
      <div className="taxi-banner">
        <img src={bg} alt="Background" className="taxi-banner-img" />
        <div className="taxi-overlay">
          <h1 className="taxi-title">Booking</h1>
          <p className="taxi-breadcrumb">
            <a href="/">Home</a> &gt; <a href="/">Booking</a>
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="taxi-form">
        <h1 className="taxi-form-title">Book Your Taxi Ride!</h1>
        <p className="taxi-form-subtitle">
          To get the ride of your taxi, please select from the following:
        </p>

        <form onSubmit={handleSubmit}>
          <div className="taxi-input-group">
            <input type="text" value={formData.model} className="taxi-input" readOnly />
          </div>

          <div className="taxi-input-group">
            <input 
              type="text" 
              name="startDestination"
              placeholder="Start Destination" 
              className="taxi-input"
              value={formData.startDestination}
              onChange={handleChange} 
              required
            />
            <input 
              type="text" 
              name="endDestination"
              placeholder="End Destination" 
              className="taxi-input"
              value={formData.endDestination}
              onChange={handleChange} 
              required
            />
          </div>

          <div className="taxi-radio-group">
            <button
              type="button"
              className={`taxi-radio-btn ${selectedType === "single" ? "active" : ""}`}
              onClick={() => {
                setSelectedType("single");
                setFormData((prev) => ({ ...prev, type: "single" }));
              }}
            >
              Single
            </button>
            <button
              type="button"
              className={`taxi-radio-btn ${selectedType === "family" ? "active" : ""}`}
              onClick={() => {
                setSelectedType("family");
                setFormData((prev) => ({ ...prev, type: "family" }));
              }}
            >
              Family
            </button>
          </div>

          <div className="taxi-input-group">
            <input 
              type="text" 
              name="name"
              placeholder="Complete Name" 
              className="taxi-input"
              value={formData.name}
              onChange={handleChange} 
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              className="taxi-input"
              value={formData.email}
              onChange={handleChange} 
              required
            />
          </div>

          <div className="taxi-input-group">
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone No" 
              className="taxi-input"
              value={formData.phone}
              onChange={handleChange} 
              required
            />
          </div>

          <button type="submit" className="taxi-submit-btn">Book a Car</button>
        </form>
      </div>
    </>
  );
};

export default BookUrTaxi;
