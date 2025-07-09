import React from 'react';

function ServiceAreas() {
  const boroughs = [
    {
      name: "Brooklyn",
      description: "Brooklyn has tons of rowhouses with flat roofs. We've fixed more leaks in Bushwick than we can count — especially after summer flash storms.",
      icon: "��️"
    },
    {
      name: "Queens",
      description: "Queens homes love their asphalt shingles, but hail or high wind? That stuff goes flying.",
      icon: "🏠"
    },
    {
      name: "Manhattan",
      description: "Manhattan commercial buildings? Rooftop AC units leaking into the ceiling tiles is a regular call.",
      icon: "🏢"
    },
    {
      name: "The Bronx",
      description: "The Bronx has tons of aging multi-family homes — sagging roofs and water damage we've been patching up for decades.",
      icon: "��️"
    },
    {
      name: "Staten Island",
      description: "Staten Island sees heavy snow load and ice dams in the winter, especially on sloped roofs. We get a lot of \"Help, my gutter ripped off!\"",
      icon: "🏔️"
    }
  ];

  return (
    <section id="areas" className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">🏙️ Roofing in NYC Isn't Like Anywhere Else</h2>
            <p className="lead">
              Being a Roofing Contractor in NYC means something different. We deal with five boroughs full of old brick buildings, flat roofs, walk-ups with weird angles, brownstones with rotted beams, and commercial roofs with years of neglect.
            </p>
            <p className="mb-4">Every borough brings its own roofing headaches:</p>
          </div>
        </div>
        
        <div className="row g-4">
          {boroughs.map((borough, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-6 mb-3">{borough.icon}</div>
                  <h5 className="card-title fw-bold mb-3">{borough.name}</h5>
                  <p className="card-text">{borough.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead">Every job, every borough, has a story. And we're here for all of it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;
