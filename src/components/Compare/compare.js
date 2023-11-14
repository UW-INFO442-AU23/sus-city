import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

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
                    <button type="button" class="btn btn-secondary">Apply Search</button>
                </div>
                <div className="compare-table">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row">Model</th>
                                <td>Model name 1</td>
                                <td>Model name 2</td>  
                            </tr>
                            <tr>
                                <th scope="row">Features</th>
                                <td>Features 1</td>
                                <td>Features 2</td>
                            </tr>
                            <tr>
                                <th scope="row">Classification</th>
                                <td>Classification 1</td>
                                <td>Classification 2</td>  
                            </tr>
                            <tr>
                                <th scope="row">Drive Type</th>
                                <td>Drive Type 1</td>
                                <td>Drive Type 2</td>
                            </tr>
                            <tr>
                                <th scope="row">Carbon Emissions</th>
                                <td>CO2 Emissions 1</td>
                                <td>CO2 Emissions 2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
            </div>
        </div>
    )
}