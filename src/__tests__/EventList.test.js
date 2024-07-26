// src/__tests__/EventList.test.js

import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { extractLocations, getEvents } from '../api';

describe('<EventList /> component', () => {

  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  })


  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    // because this time it need to render an EventList within 4 events
    // so it is rerender here
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    // expect(EventListComponent.getAllByRole("listitem").length).toBe(4);
    // the code is equal to the code below
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});