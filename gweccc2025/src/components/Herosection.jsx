import React from 'react'
import img from '../assets/image4.jpg'
function Herosection() {
  return (
    <section className="hero-section">
    <div className='heroImage' >
        <img width="100%" height="100%" src={img} alt="" />
      </div>
      <div className="hero-content">
        <h1>GWECCC 2025</h1>
        <p>Join us for the Global Water, Energy, and Climate Conference</p>
        <p>23 - 25 FEBRUARY 2025</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      
    </section>
  );
}

export default Herosection