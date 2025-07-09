import React from 'react';

function AdditionalServices() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold mb-4">🧹 Gutter Cleaning Service</h4>
                <p>You know what causes half the leaks we see? Clogged gutters.</p>
                <p>
                  Yup. Especially in the fall, leaves back up the flow, water pools on the roof, and boom — you got a leak dripping into your hallway.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Hand cleaning and downspout flushing</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Gutter repair and installation</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Aluminum, copper, half-round options</li>
                </ul>
                <div className="bg-primary bg-opacity-10 p-3 rounded">
                  <p className="small mb-0 fst-italic">
                    Funny story: In Park Slope, we once cleaned out an entire pigeon nest from a downspout. The bird was fine. The landlord? Not so much. But the water stopped leaking!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold mb-4">🛡️ Waterproofing Services</h4>
                <p>
                  NYC doesn't just get rain. We get sideways, windy, cold, pouring, pounding rain that finds every weak spot in your building.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Flat roof waterproof coatings</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Sealant around vents and penetrations</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Brick and parapet waterproofing</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Basement and foundation sealing</li>
                </ul>
                <div className="bg-primary bg-opacity-10 p-3 rounded">
                  <p className="small mb-0 fst-italic">
                    There was this place in Long Island City — an office with a rooftop terrace. Every time it rained, water came down the walls inside. After a full membrane coat and some parapet sealing, they're dry as toast now. And they invited us for pizza after. Good people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalServices;
