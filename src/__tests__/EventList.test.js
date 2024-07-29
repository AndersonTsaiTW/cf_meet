// src/__tests__/EventList.test.js

import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";


describe('<EventList /> component', () => {

  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  })


  test('#1.1 unit: has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('#1.1 unit: renders correct number of events', async () => {
    // because this time it need to render an EventList within 4 events
    // so it is rerender here
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    // expect(EventListComponent.getAllByRole("listitem").length).toBe(4);
    // the code is equal to the code below
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});

describe('<EventList /> integration', () => {
  test('#1.1: renders a list of 32 events when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });
  });

});