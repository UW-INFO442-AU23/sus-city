import React from 'react';

export default function Compare(props) {
    return (
        <div className="compare">
            <div className="content">
                <div className="compare-heading">Compare</div>
                <div className="row compare-label">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Select first car
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Car #1</a></li>
                            <li><a class="dropdown-item" href="#">Car #2</a></li>
                            <li><a class="dropdown-item" href="#">Car #3</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Select second car
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Car #1</a></li>
                            <li><a class="dropdown-item" href="#">Car #2</a></li>
                            <li><a class="dropdown-item" href="#">Car #3</a></li>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-secondary">Apply Search</button>
                </div>
                <div className="compare-table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="row">Model</th>
                            <th scope="row">Features</th>
                            <th scope="row">Classification</th>
                            <th scope="row">Drive Type</th>
                            <th scope="row">Carbon Emissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="col">Model name</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>                                
                            <th scope="col">Model name</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
            </div>
        </div>
    )
}