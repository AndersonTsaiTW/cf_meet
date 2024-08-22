import { loadFeature, defineFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Event from '../components/Event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('#2.1 An event element is collapsed by default.', ({ given, when, then }) => {
    given('user doesn\'t click the button to show details', () => {
      // leave this part empty because the user did nothing
    });

    let EventComponent;
    let allEvents;
    when('the user see the event', async () => {
      allEvents = await getEvents();
      const event = allEvents[0];
      EventComponent = render(<Event event={event} />);

    });

    then('the details of the event is hidden', () => {
      expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();

    });

    test('#2.2 User can expand an event to see details.', ({ given, when, then }) => {
      let EventComponent;
      let allEvents;
      given(/^user has seen the events\(e.g, "(.*)"\)$/, async () => {
        allEvents = await getEvents();
        const event = allEvents[0];
        EventComponent = render(<Event event={event} />);
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();

      });

      let user;
      when('the user clicks the button on an event', async () => {
        user = userEvent.setup();
        const showDetails = EventComponent.queryByText('show details');
        await user.click(showDetails);
      });

      then('the frame of the event can expand and show more details.', () => {
        expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
        expect(EventComponent.container.querySelector('.description')).toBeInTheDocument();
      });
    });

    test('#2.3 User can collapse an event to hide details.', ({ given, when, then }) => {
      let EventComponent;
      let user;
      let allEvents;
      given('the frame of the event has expanded', async () => {
        allEvents = await getEvents();
        const event = allEvents[0];
        EventComponent = render(<Event event={event} />);

        user = userEvent.setup();
        const showDetails = EventComponent.queryByText('show details');
        await user.click(showDetails);
        expect(EventComponent.container.querySelector('.description')).toBeInTheDocument();
      });

      when('the user clicks it again', async () => {
        const hideDetails = EventComponent.queryByText('hide details');
        await user.click(hideDetails);

      });

      then('the frame of the event will return to a simple version again', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
        expect(EventComponent.container.querySelector('.description')).not.toBeInTheDocument();
      });
    });
  });

});