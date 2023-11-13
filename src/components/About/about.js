import React from 'react';

export default function About(props) {
    return (
        <div className="about">
            <div className="about-content">
                <div className="mission-container">
                    <div className="div">
                        <div className="mission-heading">
                            Our Mission
                        </div>
                        <div className="mission-blurbing">
                            <p className="mission-blurbing-text">
                                Our goal is to inform young adults about the impact of carbon emissions related to
                                transportation in cities.
                                <br />
                                More specifically, how might we inform young adult car buyers in King County about
                                carbon emissions from various types of cars to help them minimize the environmental
                                impact of their commutes?
                                <br />
                                Sustainable cities and communities
                                <br />
                                Cities occupy just 3% of the Earth’s land, but account for 60-80 per cent of energy
                                consumption and 75 per cent of carbon emissions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}