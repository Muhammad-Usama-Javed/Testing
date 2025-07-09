import React from 'react';

function Services() {
  const services = [
    {
      title: "🛠️ Roof Repair & Replacement",
      items: [
        "Flat roof repairs",
        "Full roof replacement", 
        "Leak detection & roof patching",
        "Roof coatings (especially for older Brooklyn & Queens buildings)",
        "Skylight leak fixes",
        "Emergency roofing services (yes, even at 3AM during a thunderstorm)"
      ],
      story: "One time in Forest Hills, a squirrel chewed through a soffit, and it rained straight into the attic. The whole ceiling in the baby's room collapsed. We had a team on-site the next morning. That's the kind of thing we handle."
    },
    {
      title: "🧰 General Contractor Work",
      items: [
        "Fascia & soffit repairs",
        "Siding work",
        "Chimney flashing and sealing", 
        "Skylight installs and repairs",
        "Interior patching after roof leaks"
      ],
      story: "We're more than just roofers. As a licensed General Contractor, we often find that roofing problems are connected to bigger structural issues. It's all connected. Fixing the roof right means looking under the hood too."
    },
    {
      title: "🏗️ Construction Company Services",
      items: [
        "New roof installations (shingle, EPDM, metal, tile, torch-down)",
        "Roof framing & structural reinforcement",
        "Dormers and attic conversions",
        "Permits and code compliance"
      ],
      story: "Got a brownstone in Harlem? We know those beams. Gut-reno in Astoria? Been there. Staten Island new build? We've done it in the snow."
    }
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <p className="lead mb-4">
              Roofs in NYC go through hell. We get heatwaves, sudden hail, freezing winters, hurricane leftovers. A little wear and tear can quickly turn into a big, expensive mess.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-4">{service.title}</h4>
                  <ul className="list-unstyled mb-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-light p-3 rounded">
                    <p className="small mb-0 fst-italic">{service.story}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
