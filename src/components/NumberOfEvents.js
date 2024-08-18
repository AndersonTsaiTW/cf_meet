// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  // add a state to record the number
  const [numberOfEvents, setNumberOfEvents] = useState(32); // default number is 32

  const handleInputChange = (event) => {
    setNumberOfEvents(event.target.value);
    const value = Number(event.target.value);

    let errorText;
    if (isNaN(value)) {
      errorText = "Error! This is Not A Number. Please enter a valid value.";

    } else if (value <= 0) {
      errorText = "Error! This number needs to be more than zero.";

    } else {
      errorText = "";
      setNumberOfEvents(value);
      setCurrentNOE(value); // update currentNOE in App component
    }
    setErrorAlert(errorText);

  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        id="number-of-events-input"
        value={numberOfEvents}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default NumberOfEvents;
