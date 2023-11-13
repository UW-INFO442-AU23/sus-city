import React, { useState } from 'react';

export default function Search(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCars, setFilteredCars] = useState(props.cars);
    let cars = props.cars;

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        const matchedCars = cars.filter(car => 
            car.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCars(matchedCars); // Update the filtered cars state only on button click
    };


    return (
        <div className="search">
            <header className="main-header">
                <h2>Search</h2>
            </header>
            <div className='filter-search'>
                <div className="filter-form">
                    {/* Filter form elements go here */}
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
                            <button className="search-button btn btn-primary" type="button" onClick={handleSearchClick}>Search Cars</button>
                        </div>
                    </div>
                    <div className='matched-cars'>
                        {filteredCars.map(car => (
                            <div className="car-card" key={car.title}>
                                <img src={car.image} alt={car.title} />
                                <div className="card-content">
                                    <h5>{car.title}</h5>
                                    <a href={car.external_link} target="_blank" rel="noopener noreferrer" className="info-btn">
                                        More Info
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
        
    )
}