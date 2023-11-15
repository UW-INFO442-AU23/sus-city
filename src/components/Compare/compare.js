import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Compare(props) {
    const [car1, setCar1] = useState(""); 
    const [car2, setCar2] = useState("");
    const [comparisonResult, setComparisonResult] = useState([]);
    let cars = props.cars;

    const carOptions = cars
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((car) => (
        <option key={car.title} value={car.title}>
            {car.title}
        </option>
        ));

    const handleCompare = () => {
        const filteredCars1 = cars.find(car => car.title.toLowerCase() === car1.toLowerCase());
        const filteredCars2 = cars.find(car => car.title.toLowerCase() === car2.toLowerCase());
    
        if (filteredCars1 && filteredCars2) {
            const comparedData = [
                {
                    property: 'Model',
                    car1: filteredCars1.title,
                    car2: filteredCars2.title,
                    image1: filteredCars1.image, 
                    image2: filteredCars2.image
                },
                { property: 'Classification', car1: filteredCars1.car_type, car2: filteredCars2.car_type },
                { property: 'Drive Type', car1: filteredCars1.drive, car2: filteredCars2.drive },
                { property: 'Carbon Emissions', car1: filteredCars1.co2_emission, car2: filteredCars2.co2_emission }
            ];
            setComparisonResult(comparedData);
        } else {
            setComparisonResult([]);
        }
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
                    
                    <Button variant="secondary" className="compare-button btn-secondary" onClick={handleCompare}>
                        Apply Search
                    </Button>
                </div>
                <div className="compare-table">
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
                </div>
               
            </div>
        </div>
    )
}