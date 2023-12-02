import React, { useState, useEffect } from 'react';

const Quizbody = ({ quizNumber, quizTitle, options, onSelectOption, onPrevious }) => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption('');
  }, [quizNumber]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onSelectOption(selectedOption);
    }
  };

  const handleNext = () => {
    if (selectedOption) {
      onSelectOption(selectedOption);
    }
  };

  const handlePrevious = () => {
    onPrevious();
  };


  return (
    <div className="quiz-body">
      <div className="title-container">
        <h2>{quizTitle}</h2>
        <img src={`/imgs/quiz${quizNumber+1}.png`} alt="quiz progress" className="image"/>
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <div key={index} className="box">
            <label className="rectangle">
              <input
                type="radio"
                id={`option-${quizNumber}-${index}`}
                name={`quiz-option-${quizNumber}`}
                value={option}
                onChange={() => handleOptionChange(option)}
                checked={selectedOption === option}
                className="custom-checkbox"
              />
              <span className={`rectangle-default ${selectedOption === option ? 'checked' : ''}`}></span>
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="button-container">
        {quizNumber >= 1 && (
          <button onClick={handlePrevious} className="type-solid-left-icon">
            <div className="text">
              <div className="label">Previous</div>
            </div>
          </button>
        )}
        <div className="next-button-placeholder"></div>
        <button onClick={handleNext} className="type-solid-left-icon">
          <div className="text">
            <div className="label">Next</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Quizbody;
