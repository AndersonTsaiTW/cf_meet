import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('#3.1 Uesr can see the number of total events by default.', ({ given, when, then }) => {
    given('user hasn’t searched for any city', () => {
      // leave this part empty because the user did nothing
    });

    let AppDOM;
    when('the user opens the app', () => {
      AppDOM = render(<App />).container.firstChild;
    });

    then('the user should see the total number of events', () => {
      expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument()

    });
  });

  test('#3.2 User can change the number of shown events.', ({ given, when, then }) => {
    let AppComponent;
    let NumberOfEventsInput;
    given('user finds the textbox of the number of events', () => {
      AppComponent = render(<App />);
      NumberOfEventsInput = AppComponent.container.querySelector('#number-of-events-input');

    });

    let user = userEvent.setup();
    when('user types a specific number in the textbox', async () => {
      await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

    });

    then('the user should see the specific number of events', async () => {
      await waitFor(() => {
        const EventListItems = AppComponent.queryAllByRole('listitem');
        expect(EventListItems.length).toBe(10);
      });

    });
  });

});