// src/components/Event.js

import React, { useState } from 'react';

const Event = ({ event }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <li>
      <h1>{event.summary}</h1>
      <p>Start Time: {event.created}</p>
      <p>Location: {event.location}</p>
      <button onClick={() => setDetailsVisible(!detailsVisible)}>
        {detailsVisible ? 'hide details' : 'show details'}
      </button>
      {detailsVisible && (
        <div>
          <p className='description'>{event.description}</p>
        </div>
      )}
    </li>
  );
}

export default Event;
