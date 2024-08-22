import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

import App from "../App";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let user;

  beforeEach(() => {
    // Render component before each test
    NumberOfEventsComponent = render(<NumberOfEvents
      setCurrentNOE={() => { }}
      setErrorAlert={() => { }} />);
    user = userEvent.setup(); // Setup userEvent for simulating user interactions
  });

  test('#3.1 unit: contains a textbox element', () => {
    // Assert that there is an input element with the textbox role
    expect(NumberOfEventsComponent.getByRole('textbox')).toBeInTheDocument();
  });

  test('#3.1 unit: default value of the input field is 32', () => {
    // Assert that the textbox has a default value of 32
    expect(NumberOfEventsComponent.getByRole('textbox').value).toBe('32');
  });

  test('#3.2 unit: value of the textbox changes when a user types in it', async () => {
    // Retrieve the textbox element
    const textbox = NumberOfEventsComponent.getByRole('textbox');
    await user.type(textbox, '{backspace}{backspace}10'); // Clears and types '10'
    expect(textbox.value).toBe('10');
  });
});

describe('<NumberOfEvents /> Integration', () => {
  let user;

  beforeEach(() => {
    // Render component before each test
    user = userEvent.setup(); // Setup userEvent for simulating user interactions
  });

  test('#3.2 integration: changes the value in the textbox will change the number of events in the list', async () => {
    const AppComponent = render(<App />);
    const NumberOfEventsInput = AppComponent.container.querySelector('#number-of-events-input');
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

    await waitFor(() => {
      const EventListItems = AppComponent.queryAllByRole('listitem');
      expect(EventListItems.length).toBe(10);
    });
  });
})
