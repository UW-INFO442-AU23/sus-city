import { Carousel } from 'bootstrap';
import React from 'react';

const car_card = (car) => {
  return (
    <div className="car-card" key={car.title}>
      <h5 className="card-title px-3 pt-4">{car.title}</h5>
      <img src={car.image} alt={car.title}/>
      <div className="card-content">
        <div className="car-price">
          <h5>${parseInt(car.price.replace(/,/g, '')).toLocaleString()}</h5>
          <p className="avg-text ml-2">Average Price</p>
        </div>
        <div className="tag">{car.car_type}</div>
        <div className="tag">{getPriceCategory(car.price)}</div>
        <div className="tag">{car.number_of_seats} seats</div>
        {car.apple_carplay === "TRUE" && <div className="tag"> Apple CarPlay</div>}
        {car.keyless_entry === "TRUE" && <div className="tag"> Keyless Entry</div>}
        {car.dynamic_cruise_control === "TRUE" && <div className="tag"> Dynamic Cruise</div>}
        <div className="card-info border-top border-bottom">

          <p className="card-description">Drive: {car.drive}</p>
          <p>Size: {car.vehicle_size_class}</p>
          <p>CO2 Emission: {car.co2_emission}</p>
        </div>
        <div className="center-container">
            <a
                href={car.external_link}
                target="_blank"
                rel="noopener noreferrer"
                className="info-btn"
            >
                Visit Website
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
  const car1 = cars[0]
  const car2 = cars[1]
  return (
    <div className="quiz-result">
      <div className="title-container">
        <h2>Your Top Car Recommendations</h2>
      </div>
      <div className="body-container">
        {car_card(car1)}
        {car_card(car2)}
      </div>
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
