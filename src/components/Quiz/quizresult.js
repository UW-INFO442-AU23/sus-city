import { Carousel } from 'bootstrap';
import React from 'react';

const car_card = (car) => {
  return (
    <div className="car-card" key={car.title}>
      <h5 className="card-title px-3 pt-4">{car.title}</h5>
      <img src={car.image} alt={car.title} />
      <div className="card-content">
        <div className="car-price">
          <h5>
            $
            {parseInt(car.price.replace(/,/g, "")).toLocaleString()}
          </h5>
          <p className="avg-text ml-2">Starting Price</p>
        </div>
        <div className="tag">{car.car_type}</div>
        <div className="tag">{getPriceCategory(car.price)}</div>
        <div className="tag">{car.number_of_seats} seats</div>
        {car.apple_carplay === "TRUE" && (
          <div className="tag"> Apple CarPlay</div>
        )}
        {car.keyless_entry === "TRUE" && (
          <div className="tag"> Keyless Entry</div>
        )}
        {car.dynamic_cruise_control === "TRUE" && (
          <div className="tag"> Dynamic Cruise</div>
        )}
        <div className="card-info border-top border-bottom">
          <p className="card-description">Drive: {car.drive}</p>
          <p>Size: {car.vehicle_size_class}</p>
          <p>CO2 Emission: {car.co2_emission} grams/mile</p>
        </div>
        <div className="center-container">
          <a
            href={car.external_link}
            target="_blank"
            rel="noopener noreferrer"
            className="info-btn"
          >
            Visit Website <i class="bi bi-box-arrow-up-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
const getPriceCategory = (price) => {
  const numericPrice = parseFloat(price.replace(/,/g, '')); 

  if (numericPrice < 25000) return '$';
  if (numericPrice >= 25000 && numericPrice < 35000) return '$$';
  if (numericPrice >= 35000 && numericPrice < 50000) return '$$$';
  return '$$$$';
};

export const Box = (text) => {
  return (
    <div className="group">
      <div className="overlap-group-2">
        <div className="rectangle" />
        <div className="text-wrapper-4">{text}</div>
        <div className="ellipse" />
        <div className="group-2">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
        </div>
      </div>
    </div>
  );
};

const Results = ({ selectedOptions, cars }) => {
  console.log(cars)
  console.log(selectedOptions)
  let priceRange, carTypes, co2EmissionRange, mpgRange, savingsRange;

  // Price Range
  const priceMapping = {
    'Under $30,000': [0, 30000],
    '$30,000 to $35,000': [30000, 35000],
    '$35,000 to $40,000': [35000, 40000],
    '$40,000 to $45,000': [40000, 45000],
    'above $45,000': [45000, Infinity],
    'No preference': [0, Infinity]
  };
  priceRange = priceMapping[selectedOptions[0]];

  // Car Types
  const carTypeMapping = {
    'Electric Vehicle (EV)': ['EV'],
    'Hybrid Vehicle': ['Hybrid'],
    'Gas Vehicle (Gas)': ['Gas'],
    'EV and Hybrid': ['EV', 'Hybrid'],
    'Gas and Hybrid': ['Gas', 'Hybrid'],
    'All types of cars': ['EV', 'Hybrid', 'Gas']
  };
  carTypes = carTypeMapping[selectedOptions[1]];

  // CO2 Emission Range
  const co2Mapping = {
    '0 g/km CO2': [0, 0],
    'below 100 g/km CO2': [0, 100],
    '100 to 200 g/km CO2': [100, 200],
    'above 200 g/km CO2': [200, Infinity],
    'No preference': [0, Infinity]
  };
  co2EmissionRange = co2Mapping[selectedOptions[2]];

  // MPG Range
  const mpgMapping = {
    '100 MPG and above': [100, Infinity],
    '75 to 99 MPG': [75, 99],
    '50 to 74 MPG': [50, 74],
    '25 to 49 MPG': [25, 49],
    'below 25 MPG': [0, 25],
    'No preference': [0, Infinity]
  };
  mpgRange = mpgMapping[selectedOptions[3]];

  // Savings Range
  const savingsMapping = {
    'More than $6,000': [6000, Infinity],
    '$4,000 to $6,000': [4000, 6000],
    '$2,000 to $4,000': [2000, 4000],
    'Save up to $2,000': [0, 2000],
    'No preference': [0, Infinity]
  };
  savingsRange = savingsMapping[selectedOptions[4]];

  console.log(priceRange)
  console.log(carTypes)
  console.log(co2EmissionRange)
  console.log(mpgRange)
  console.log(savingsRange)
  

  const isInRange = (value, range) => value >= range[0] && value <= range[1];

  const filteredCars = cars.filter(car => {
    const price = parseFloat(car.price.replace(/[^0-9.]/g, ''));
    const co2Emission = parseInt(car.co2_emission, 10);
    const mpg = parseInt(car.combined_MPG, 10);
    const savings = parseInt(car.you_save_spend_in_5_years, 10);

    return isInRange(price, priceRange) &&
           carTypes.includes(car.car_type) &&
           isInRange(co2Emission, co2EmissionRange) &&
           isInRange(mpg, mpgRange) &&
           isInRange(savings, savingsRange);
  });

  filteredCars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  console.log(filteredCars)

  const car1 = filteredCars.length < 2 ? cars[0] : filteredCars[0]
  const car2 = filteredCars.length < 2 ? cars[1] : filteredCars[1]
  console.log(filteredCars.length === 0)
  console.log(car1)
  console.log(car2)
  return (
    <div className="quiz-result">
      <div className="title-container">
        {filteredCars.length < 1 ? <h1>Sorry, no results found. But here are our recommendations:</h1> : <h1>Your Top Recommendations:</h1>}
      </div>
      {
        filteredCars.length === 1 ? 
          <div className="body-container">
            {car_card(filteredCars[0])}
          </div> : 
          <div className="body-container">
            {car_card(car1)}
            {car_card(car2)}
          </div>
      }
      <div className="link-container">
        <a href="/Compare">
          {Box('Compare Cars')}
        </a>
        <a href="/Search">
          {Box('Search for Cars')}
        </a>
      </div>
    </div>
    );
};

export default Results;
