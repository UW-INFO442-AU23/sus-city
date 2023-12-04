import React, { useState } from 'react';
import Quizbody from './quizbody';
import Results from './quizresult';

const quiztitle = [
  'What price range are you looking for?',
  'Which type of powertrain do you prefer for your next vehicle?',
  'What level of CO2 emissions are you comfortable with for your next vehicle?',
  'What level of fuel efficiency are you looking for in your next vehicle?',
  'What is your expectation for cost savings or additional expenses over five years of vehicle ownership?',
];

const quizzes = [
  ['Under $30,000', '$30,000 to $35,000', '$35,000 to $40,000', '$40,000 to $45,000', 'above $45,000','No preference'],
  ['Electric Vehicle (EV)', 'Hybrid Vehicle', 'Gas Vehicle (Gas)', 'EV and Hybrid', 'Gas and Hybrid', 'All types of cars'],
  ['0 g/km CO2', 'below 100 g/km CO2', '100 to 200 g/km CO2', 'above 200 g/km CO2','No preference'],
  ['100 MPG and above', '75 to 99 MPG', '50 to 74 MPG', '25 to 49 MPG', 'below 25 MPG','No preference'],
  ['More than $6,000', '$4,000 to $6,000', '$2,000 to $4,000', 'Save up to $2,000', 'No preference'],
];

export default function Questionary(props){
  let cars = props.cars;
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (option) => {
    const newSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);

    if (currentQuiz <= quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };
  const handlePrevious = () => {
    if (currentQuiz > 0) {
      const newSelectedOptions = selectedOptions.slice(0, -1);
      setSelectedOptions(newSelectedOptions);
      setCurrentQuiz(currentQuiz - 1);
    }
  };


  return (
    <div>
      {currentQuiz < quizzes.length ? (
        <Quizbody
          quizNumber={currentQuiz}
          quizTitle={quiztitle[currentQuiz]}
          options={quizzes[currentQuiz]}
          onSelectOption={handleSelectOption}
          onPrevious={handlePrevious}
        />
      ) : (
        <Results selectedOptions={selectedOptions} cars={cars}/>
      )}
    </div>
  );
};