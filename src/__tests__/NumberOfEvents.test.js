import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let user;

  beforeEach(() => {
    // Render component before each test
    NumberOfEventsComponent = render(<NumberOfEvents />);
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
    // I will suggest the code in the commend below
    // await user.clear(textbox);
    // await user.type(textbox, '10');  // Now type '10'
    await user.type(textbox, '{backspace}{backspace}10'); // Clears and types '10'
    expect(textbox.value).toBe('10');
  });
});
