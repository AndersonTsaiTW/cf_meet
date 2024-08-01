// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  // add a state to record the number
  const [numberOfEvents, setNumberOfEvents] = useState(32); // default number is 32

  const handleInputChange = (event) => {
    const value = Number(event.target.value);
    setNumberOfEvents(value);
    setCurrentNOE(value); // update currentNOE in App component
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
