import React from 'react';

function WhyChooseUs() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div 
              className="rounded shadow-lg"
              style={{
                height: '400px',
                backgroundImage: 'url(https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
          <div className="col-lg-6 ps-lg-5 mt-4 mt-lg-0">
            <h2 className="display-6 fw-bold mb-4">🏙️ Why Locals Trust Our NYC Crew</h2>
            <p className="lead mb-4">
              We're not some giant chain. We're local. We've worked in every borough, on every kind of roof.
            </p>
            
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-shield-check text-success fs-4 me-3"></i>
                  <span>Fully Licensed & Insured</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-people text-primary fs-4 me-3"></i>
                  <span>Local NYC Team</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-clock text-warning fs-4 me-3"></i>
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-award text-info fs-4 me-3"></i>
                  <span>Quality Workmanship</span>
                </div>
              </div>
            </div>
            
            <p className="mb-4">
              We know when the Department of Buildings gets picky. We know which co-ops need special insurance. We know how to deal with that cranky neighbor on the third floor.
            </p>
            
            <p className="fw-bold text-primary">
              We always show up, clean up, and keep it real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
