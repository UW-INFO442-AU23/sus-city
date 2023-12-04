import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Compare(props) {
    const [car1, setCar1] = useState(""); 
    const [car2, setCar2] = useState("");
    const [comparisonResult, setComparisonResult] = useState([]);
    const [showSelectCarsMessage, setShowSelectCarsMessage] = useState(true);
    let cars = props.cars;

    const carOptions = cars
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((car) => (
        <option key={car.title} value={car.title}>
            {car.title}
        </option>
        ));

    const handleBoolean = (value) => {
        return value === "TRUE" ? <span className="text-success">&#10003;</span> : value === "FALSE" ? <span className="text-danger">&#10007;</span> : null;
    };

    const handleCompare = () => {
        if (!car1 || !car2) {
            setShowSelectCarsMessage(true);
            setComparisonResult([]);
            return;
        }

        const filteredCars1 = cars.find(car => car.title.toLowerCase() === car1.toLowerCase());
        const filteredCars2 = cars.find(car => car.title.toLowerCase() === car2.toLowerCase());
    
        if (filteredCars1 && filteredCars2) {
            setShowSelectCarsMessage(false);
            const comparedData = [
                {
                    property: 'Model',
                    car1: filteredCars1.title,
                    car2: filteredCars2.title,
                    image1: filteredCars1.image, 
                    image2: filteredCars2.image
                },
                { property: 'Price', car1: `$${parseInt(filteredCars1.price.replace(/[\$,]/g, '')).toLocaleString()}`, car2: `$${parseInt(filteredCars2.price.replace(/[\$,]/g, '')).toLocaleString()}` },
                { property: 'Classification', car1: filteredCars1.car_type, car2: filteredCars2.car_type },
                { property: 'Drive Type', car1: filteredCars1.drive, car2: filteredCars2.drive },
                { property: 'Carbon Emissions', car1: `${filteredCars1.co2_emission} grams/mile`, car2: `${filteredCars2.co2_emission} grams/mile` },
                { property: 'Apple CarPlay', car1: handleBoolean(filteredCars1.apple_carplay), car2: handleBoolean(filteredCars2.apple_carplay) },
                { property: 'Keyless Entry', car1: handleBoolean(filteredCars1.keyless_entry), car2: handleBoolean(filteredCars2.keyless_entry) },
                { property: 'Dynamic Cruise Control', car1: handleBoolean(filteredCars1.dynamic_cruise_control), car2: handleBoolean(filteredCars2.dynamic_cruise_control) }
            ];
            setComparisonResult(comparedData);
        } else {
            setShowSelectCarsMessage(false);
            setComparisonResult([]);
        }
    };

    const handleClear = () => {
        setCar1("");
        setCar2("");
        setComparisonResult([]);
        setShowSelectCarsMessage(true);
    };


    return (
        <div className="compare">
            <div className="content">
                <div className="compare-heading">Compare</div>
                <div className="row compare-label">
                    <div class="dropdown">
                        <Form.Select
                            id="car1"
                            name="car1"
                            className="compare-input-field"
                            placeholder="Search first car" 
                            value={car1}
                            onChange={(e) => setCar1(e.target.value)} 
                        >
                            <option value="">Select first car</option>
                            {carOptions}
                        </Form.Select>
                    </div>
                    <div class="dropdown">
                        <Form.Select
                            id="car2"
                            name="car2"
                            className="compare-input-field"
                            placeholder="Search second car" 
                            value={car2}
                            onChange={(e) => setCar2(e.target.value)}
                        >
                            <option value="">Select second car</option>
                            {carOptions}
                        </Form.Select>
                    </div>
                    <Button variant="secondary" className="compare-button" onClick={handleCompare} disabled={!car1 || !car2}>
                        Apply Search
                    </Button>
                    <Button variant="secondary" className="clear-button" onClick={handleClear} disabled={!car1 || !car2}>
                        Clear Filters
                    </Button>
                </div>
                <div className="compare-table">
                    {showSelectCarsMessage ? (
                        <div className="select-cars-message">
                            Select two cars to generate table.
                        </div>
                    ) : (
                    <table class="table table-bordered">
                        <tbody>
                            {comparisonResult.map((row, index) => (
                                <tr key={index}>
                                    <th scope="row">{row.property}</th>
                                    {row.property === 'Model' ? (
                                        <>
                                            <td colSpan="2">
                                                {row.image1 && <img src={row.image1} alt={`${row.car1} Image`} className="model-image" />}
                                                <br />
                                                {row.car1}
                                            </td>
                                            <td colSpan="2"> 
                                                {row.image2 && <img src={row.image2} alt={`${row.car2} Image`} className="model-image" />}
                                                <br />
                                                {row.car2}
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td colSpan="2">{row.car1}</td>
                                            <td colSpan="2">{row.car2}</td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )}
                </div>
               
            </div>
        </div>
    )
}