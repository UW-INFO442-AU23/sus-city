import React from 'react';

export default function Compare(props) {
    return (
        <div className="compare">
            <div className="content">
                <div className="compare-heading">Compare</div>
                <div className="row compare-label">
                    <div className="col">
                        <div class="dropdown">
                            <label className="compare-button-text">Select first car</label>
                        </div>
                    </div>
                    <div className="col">
                        <div class="dropdown">
                            <label className="compare-button-text">Select second car</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}