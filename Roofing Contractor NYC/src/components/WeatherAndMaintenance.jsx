import React from 'react';

function WeatherAndMaintenance() {
  const seasons = [
    { season: "Spring", weather: "Heavy rain + surprise storms", icon: "🌧️" },
    { season: "Summer", weather: "Brutal sun + heat cracks", icon: "☀️" },
    { season: "Fall", weather: "Leaves clogging gutters", icon: "🍂" },
    { season: "Winter", weather: "Snow, ice dams, wind damage", icon: "❄️" }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-6 fw-bold mb-4">🌦️ NYC Weather = Roof Problems</h2>
            <p className="lead">The NYC weather calendar is wild:</p>
          </div>
        </div>
        
        <div className="row g-4 mb-5">
          {seasons.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <div className="display-4 mb-3">{item.icon}</div>
                  <h5 className="card-title fw-bold">{item.season}</h5>
                  <p className="card-text small">{item.weather}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead mb-4">
              It's not if your roof will have issues — it's when. That's why we offer seasonal inspections and roof tune-ups. Catch the problem before it wrecks your ceiling.
            </p>
            <a 
              href="https://forecast.weather.gov/MapClick.php?lat=40.7831&lon=-73.9712" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Check NYC Weather Forecast
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherAndMaintenance;
