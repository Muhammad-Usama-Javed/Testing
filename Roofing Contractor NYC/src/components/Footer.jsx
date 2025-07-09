import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="fw-bold mb-3">NYC Roofing Pro</h5>
            <p className="mb-3">
              Professional roofing services across all five boroughs. Licensed, bonded, and insured.
            </p>
            <div className="mb-3">
              <p className="mb-1"><strong>Licenses & Insurance:</strong></p>
              <p className="small mb-1">Fully licensed, bonded, and insured to work in all five boroughs</p>
              <p className="small mb-1">We carry liability and workers' comp insurance</p>
              <p className="small">
                Learn more: <a href="https://www1.nyc.gov/site/buildings/index.page" target="_blank" rel="noopener noreferrer" className="text-light">NYC Department of Buildings</a>
              </p>
            </div>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><a href="#services" className="text-light text-decoration-none">Roof Repair</a></li>
              <li className="mb-1"><a href="#services" className="text-light text-decoration-none">Roof Replacement</a></li>
              <li className="mb-1"><a href="#services" className="text-light text-decoration-none">Emergency Roofing</a></li>
              <li className="mb-1"><a href="#services" className="text-light text-decoration-none">Gutter Cleaning</a></li>
              <li className="mb-1"><a href="#services" className="text-light text-decoration-none">Waterproofing</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-bold mb-3">Service Areas</h6>
            <ul className="list-unstyled">
              <li className="mb-1">Manhattan</li>
              <li className="mb-1">Brooklyn</li>
              <li className="mb-1">Queens</li>
              <li className="mb-1">The Bronx</li>
              <li className="mb-1">Staten Island</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 small">
              © 2024 NYC Roofing Pro. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 small">
              Emergency Service: <a href="tel:+1234567890" className="text-light">(123) 456-7890</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-dark py-2 mt-3">
        <div className="container">
          <div className="text-center">
            <p className="mb-0 small text-muted">
              AI vibe coded development by <a href="https://biela.dev/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">Biela.dev</a>, powered by <a href="https://teachmecode.ae/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">TeachMeCode® Institute</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
