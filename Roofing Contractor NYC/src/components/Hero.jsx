import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-section position-relative">
      <div 
        className="hero-bg position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></div>
      </div>
      
      <div className="container position-relative py-5" style={{ marginTop: '80px', minHeight: '90vh' }}>
        <div className="row align-items-center h-100">
          <div className="col-lg-8 text-white">
            <h1 className="display-4 fw-bold mb-4">
              Roofing Contractor NYC – Real Roofing for Real New Yorkers
            </h1>
            
            <div className="card bg-light text-dark p-4 mb-4" style={{ maxWidth: '600px' }}>
              <blockquote className="blockquote mb-3">
                <p className="fs-5 fst-italic">"That roof saved the house."</p>
              </blockquote>
              <p className="mb-0">
                That's what Mrs. Rosario said after our crew patched up her flat roof in the Bronx — just in time before another thunderstorm rolled in. She's lived there for 42 years, raised four kids, and she said it was the first time she felt like someone actually gave a damn about her roof.
              </p>
            </div>
            
            <p className="lead mb-4">
              That roof wasn't just a roof. It was her home, her memories, her safety. That's how we treat every roofing job in NYC — like it matters, because it does.
            </p>
            
            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary btn-lg">Get Free Estimate</a>
              <a href="tel:+1234567890" className="btn btn-outline-light btn-lg">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
