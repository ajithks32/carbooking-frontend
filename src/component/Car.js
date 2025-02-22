import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import "./taxicard.css";
import "./Car.css";


const Car = ({ image, model, gear, capacity, fuel }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-image-section">
        <img src={image} alt={model} className="card-photo" />
      </div>

      <div className="card-info">
        <div className="card-icon"></div>
        <h3 className="tcard-heading">{model}</h3>
        <p className="tcard-details">Gear: {gear}</p>
        <p className="tcard-details">Capacity: {capacity}</p>
        <p className="tcard-details">Fuel: {fuel}</p>

        <button
          className="book-btn"
          onClick={() =>
            navigate("/signin", {
              state: { model, formType: "taxi" }, // Pass formType
            })
          }
        >
          Book Taxi
        </button>
      </div>
    </motion.div>
  );
};

export default Car;