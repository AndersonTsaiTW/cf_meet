import React, { useState } from 'react';

const NumberOfEvents = () => {
  // add a state to record the number
  const [numberOfEvents, setNumberOfEvents] = useState(32); // default number is 32

  const handleInputChange = (event) => {
    setNumberOfEvents(event.target.value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        value={numberOfEvents}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default NumberOfEvents;
