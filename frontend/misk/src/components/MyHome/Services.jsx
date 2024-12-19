import React from 'react';
import img from "../../assets/Style.jpg"
import img2 from "../../assets/Color.jpg"
import img3 from "../../assets/Makeup.jpg"
import "./Services.css"


function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <img src={img} alt="Hair Styling" className="service-image"/>
          <h3>Hair Styling</h3>
          <p>Experience the best in hair care.</p>
        </div>
        <div className="service-item">
          <img src={img2} alt="Coloring" className="service-image"/>
          <h3>Coloring</h3>
          <p>Bold colors, gentle touch.</p>
        </div>
        <div className="service-item">
          <img src={img3} alt="Make-Up" className="service-image"/>
          <h3>Make-Up</h3>
          <p>Restore and rejuvenate.</p>
        </div>
        
      </div>
    </section>
  );
}


export default Services;