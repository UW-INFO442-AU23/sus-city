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
            </div>
        </div>
    )
}