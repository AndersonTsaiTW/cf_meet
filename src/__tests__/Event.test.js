// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    const event = allEvents[0];
    EventComponent = render(<Event event={event} />);
  });

  test('#2.1 unit: renders event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('#2.1 unit: renders event start time', () => {
    expect(EventComponent.queryByText(`Start Time: ${allEvents[0].created}`)).toBeInTheDocument();
  });

  test('#2.1 unit: renders event location', () => {
    expect(EventComponent.queryByText(`Location: ${allEvents[0].location}`)).toBeInTheDocument();
  });

  test('#2.1 unit: renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test("#2.1 unit: by default, event's details section should be hidden", () => {
    expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
  });

  test("#2.2 unit: shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const showDetails = EventComponent.queryByText('show details');
    await user.click(showDetails);
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.container.querySelector('.description')).toBeInTheDocument();
  });

  test("#2.3 unit: hides the details section when the user clicks on the 'hide details' button", async () => {
    // First click to show details
    const user = userEvent.setup();
    const showDetails = EventComponent.queryByText('show details');
    await user.click(showDetails);

    // Second click to hide details, show details button will show again and details will be hiddened
    const hideDetails = EventComponent.queryByText('hide details');
    await user.click(hideDetails);
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    expect(EventComponent.container.querySelector('.description')).not.toBeInTheDocument();
  });

});
