import React from "react";

import Car from "./Car";
import taxi1 from "../image/taxi1.jpg";
import taxi2 from "../image/taxi2.jpg";
import taxi3 from "../image/taxi3.jpg";
import taxi4 from "../image/taxi4.jpg";
import taxi5 from "../image/taxi5.jpg";
import taxi6 from "../image/taxi6.jpg";
import taxi7 from "../image/taxi7.jpg";
import taxi8 from "../image/taxi8.jpg";
import taxi9 from "../image/taxi9.jpg";
import bg from "../image/page-title.png";
import "./taxicard.css";

const CarList = () => {
  const taxiData = [
    { image: taxi1, model: "Alfa Romeo", gear: "Automatic", capacity: "4-Seater", fuel: "Petrol" },
    { image: taxi2, model: "Bentley", gear: "Automatic", capacity: "5-Seater", fuel: "Diesel" },
    { image: taxi3, model: "Cadillac", gear: "Automatic", capacity: "4-Seater", fuel: "Petrol" },
    { image: taxi4, model: "Ferrari", gear: "Automatic", capacity: "4-Seater", fuel: "Hybrid" },
    { image: taxi5, model: "Hyundai", gear: "Automatic", capacity: "4-Seater", fuel: "Petrol" },
    { image: taxi6, model: "Isuzu", gear: "Automatic", capacity: "4-Seater", fuel: "Petrol" },
    { image: taxi7, model: "Kia", gear: "Automatic", capacity: "5-Seater", fuel: "Diesel" },
    { image: taxi8, model: "Mazda", gear: "Automatic", capacity: "4-Seater", fuel: "Petrol" },
    { image: taxi9, model: "Renault", gear: "Automatic", capacity: "4-Seater", fuel: "Hybrid" },
  ];

  return (
    <>
      <div className="taxi-header-banner">
        <img src={bg} alt="Background" className="taxi-banner-image" />
        <div className="taxi-banner-overlay">
          <h1 className="taxi-heading">Booking</h1>
          <p className="taxi-navigation">
            <a href="/">Home</a> &gt; <a href="/">Booking</a>
          </p>
        </div>
      </div>

      {/* Grid layout for taxi cards */}
      <div className="card-container">
        <div className="card-layout">
          {taxiData.map((taxi, index) => (
            // <TaxiCard key={index} {...taxi} />
            <Car key={index} {...taxi} />

          ))}
        </div>
      </div>

      <div className="cab-booking-container">
        <div className="cab-booking-content">
          <div className="cab-info">
            <p className="cab-subtitle">LONG ESTABLISHED FACT THAT A READER</p>
            <h2 className="cab-title">BOOK YOUR CAB IT'S SIMPLE AND AFFORDABLE</h2>
          </div>
          <div className="cab-contact">
            <div className="cab-call">
              <p className="cab-phone-text">📱 CALL FOR TAXI</p>
              <p className="cab-phone-number">5267-214-392</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;