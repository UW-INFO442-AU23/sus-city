import React from 'react';

export default function Quiz(props) {
    return (
        <div className="quiz-page">
            <div className="text-container">
                <p className="title">Ready to Discover Your Perfect Eco-Friendly Ride?</p >
                <p className="take-the-car-finder">
                    Take the car finder quiz to <br />
                    find the car that suits <br />
                    all your needs
                </p >
                <a href="/Quiz/Questionary" className="button-link">
                    <div className="group">
                        <div className="overlap-group-2">
                            <div className="rectangle" />
                            <div className="text-wrapper-2">Take the Quiz</div>
                            <div className="ellipse" />
                            <div className="group-2">
                                <div className="rectangle-2" />
                                <div className="rectangle-3" />
                                <div className="rectangle-4" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="image-container">
                <img className="car-vector" alt="Car vector" src="/imgs/car-vector-4-1.png" />
            </div>
        </div>
    );
};