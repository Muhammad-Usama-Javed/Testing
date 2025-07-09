import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">🤝 Let's Talk Roofs – Free Estimate, Honest Advice</h2>
            <p className="lead mb-4">
              If you're dealing with a roofing issue, or just want to make sure things are holding up, reach out.
            </p>
            <p className="mb-5">
              No pressure. No sales pitch. Just a local Roofing Contractor in NYC who tells it straight, does solid work, and treats your roof like it's protecting their own family.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card bg-light text-dark h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold mb-4">Get Your Free Estimate</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input type="tel" className="form-control" id="phone" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="borough" className="form-label">Borough</label>
                      <select className="form-select" id="borough" required>
                        <option value="">Select Borough</option>
                        <option value="manhattan">Manhattan</option>
                        <option value="brooklyn">Brooklyn</option>
                        <option value="queens">Queens</option>
                        <option value="bronx">The Bronx</option>
                        <option value="staten-island">Staten Island</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Tell us about your roofing needs</label>
                      <textarea className="form-control" id="message" rows="4" placeholder="Describe your roofing issue or project..."></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg w-100">Get Free Estimate</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="h-100 d-flex flex-column justify-content-center">
              <div className="mb-4">
                <h4 className="fw-bold mb-3">📞 Call us today</h4>
                <a href="tel:+1234567890" className="btn btn-outline-light btn-lg mb-3 d-block">
                  (123) 456-7890
                </a>
                <p className="small">Available 24/7 for emergency roofing services</p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">We Work With:</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">🏠 Homeowners trying to stop leaks before it ruins the nursery</li>
                  <li className="mb-2">🏢 Landlords needing quick patch jobs before winter</li>
                  <li className="mb-2">🏛️ Brownstone owners keeping the original roof look</li>
                  <li className="mb-2">🏪 Business owners who don't want water dripping on their merch</li>
                  <li className="mb-2">📐 Architects looking for clean, code-friendly installs</li>
                </ul>
              </div>
              
              <div>
                <p className="lead">
                  Let's keep the roof over your head doing its job — quiet, solid, and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
