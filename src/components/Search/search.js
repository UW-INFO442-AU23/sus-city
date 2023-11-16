import React, { useState, useEffect } from "react";

export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(props.cars);
  const [selectedMake, setSelectedMake] = useState("");
  const [uniqueMakes, setUniqueMakes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDrives, setSelectedDrives] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [uniqueDrives, setUniqueDrives] = useState([]);
  const [selectedEmissions, setSelectedEmissions] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [uniquePrices, setUniquePrices] = useState([]);

  let cars = props.cars;

  useEffect(() => {
    const makes = [...new Set(cars.map((car) => car.make))];
    setUniqueMakes(makes);

    const types = [...new Set(cars.map((car) => car.car_type))];
    setUniqueTypes(types);

    const drives = [...new Set(cars.map((car) => car.drive))];
    setUniqueDrives(drives);

    const prices = [...new Set(cars.map((car) => car.price))];
    setUniquePrices(prices);
  }, [cars]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const handleDriveChange = (drive) => {
    setSelectedDrives((prev) => {
      if (prev.includes(drive)) {
        return prev.filter((d) => d !== drive);
      } else {
        return [...prev, drive];
      }
    });
  };

  const handleEmissionChange = (category) => {
    setSelectedEmissions((prev) => {
      return prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
    });
  };

  const handlePriceChange = (price) => {
    setSelectedPrices(prev => {
        return prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price];
    });
  };

  const applyFilters = () => {
    const matchedCars = props.cars.filter((car) => {
      const emission = parseInt(car.co2_emission, 10);
      const isInEmissionRange = (range) => {
        switch (range) {
          case "zero":
            return emission === 0;
          case "0-100":
            return emission > 0 && emission <= 100;
          case "100-200":
            return emission > 100 && emission <= 200;
          case "200-300":
            return emission > 200 && emission <= 300;
          case "300+":
            return emission > 300;
          default:
            return false;
        }
      };

      return (
        (selectedMake === "" || car.make === selectedMake) &&
        (selectedTypes.length === 0 || selectedTypes.includes(car.car_type)) &&
        (selectedDrives.length === 0 || selectedDrives.includes(car.drive)) &&
        (selectedEmissions.length === 0 ||
          selectedEmissions.some(isInEmissionRange)) &&
        (selectedPrices.length === 0 || selectedPrices.includes(car.price)) &&
        car.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredCars(matchedCars);
  };

  useEffect(applyFilters, [
    selectedMake,
    selectedTypes,
    selectedDrives,
    selectedEmissions,
    selectedPrices,
    props.cars,
  ]);

  const handleSearchClick = () => {
    applyFilters();
  };

  const handleClearFilters = () => {
    setSelectedMake("");
    setSelectedTypes([]);
    setSelectedDrives([]);
    setSelectedEmissions([]); 
    setSelectedPrices([]); 
    setFilteredCars(cars);
  };


  return (
    <div className="search">
      <header className="main-header">
        <h2>Search</h2>
      </header>
      <div className="filter-search">
        <div className="filter-form">
          <button className="clear-filters-btn" onClick={handleClearFilters}>Clear Filters</button>
          <div className="make-filter p-3">
            <h6 className="filter-title">Filter by Make</h6>
            <select
              value={selectedMake}
              onChange={handleMakeChange}
              className="form-control"
            >
              <option value="">All Makes</option>
              {uniqueMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          <div className="type-filter p-2 mx-2 border-top">
            <h6>Filter by Type</h6>
            {uniqueTypes.map((type) => (
              <div key={type}>
                <input
                  type="checkbox"
                  id={`type-${type}`}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                <label htmlFor={`type-${type}`}>{type}</label>
              </div>
            ))}
          </div>
          <div className="drive-filter p-2 mx-2 border-top">
            <h6>Filter by Drive</h6>
            {uniqueDrives.map((drive) => (
              <div key={drive}>
                <input
                  type="checkbox"
                  id={`drive-${drive}`}
                  checked={selectedDrives.includes(drive)}
                  onChange={() => handleDriveChange(drive)}
                />
                <label htmlFor={`drive-${drive}`}>{drive}</label>
              </div>
            ))}
          </div>
          <div className="emission-filter p-2 mx-2 border-top">
            <h6>Filter by CO2 Emission</h6>
            {["zero", "0-100", "100-200", "200-300", "300+"].map((category) => (
              <div key={category}>
                <input
                  type="checkbox"
                  id={`emission-${category}`}
                  checked={selectedEmissions.includes(category)}
                  onChange={() => handleEmissionChange(category)}
                />
                <label htmlFor={`emission-${category}`}>{category}</label>
              </div>
            ))}
          </div>
          <div className="price-filter p-2 mx-2 border-top">
            <h6>Filter by Price</h6>
            {uniquePrices.map((price) => (
              <div key={price}>
                <input
                  type="checkbox"
                  id={`price-${price}`}
                  checked={selectedPrices.includes(price)}
                  onChange={() => handlePriceChange(price)}
                />
                <label htmlFor={`price-${price}`}>{price}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="search-results-container">
          <div className="search-bar">
            <div className="input-group">
              <input
                type="text"
                className="search-input form-control mr-2 rounded"
                placeholder="Search Your Perfect Car"
                aria-label="search cars"
                onChange={handleSearchChange}
              />
              <button
                className="search-button btn btn-primary"
                type="button"
                onClick={handleSearchClick}
              >
                Search Cars
              </button>
            </div>
          </div>
          <div className="matched-cars">
            {filteredCars.map((car) => (
              <div className="car-card" key={car.title}>
                <img src={car.image} alt={car.title}/>
                <div className="card-content">
                  <h5 className="card-title">{car.title}</h5>
                  <div className="tag">{car.car_type}</div>
                  <div className="tag">{car.price}</div>
                  <div className="tag">{car.number_of_seats} seats</div>
                  {car.apple_carplay === "TRUE" && <div className="tag"> Apple CarPlay</div>}
                  {car.keyless_entry === "TRUE" && <div className="tag"> Keyless Entry</div>}
                  {car.dynamic_cruise_control === "TRUE" && <div className="tag"> Dynamic Cruise</div>}
                  <div className="card-info border-top border-bottom">

                    <p className="card-description">Drive: {car.drive}</p>
                    <p>Size: {car.vehicle_size_class}</p>
                    <p>CO2 Emission: {car.co2_emission}</p>
                  </div>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
