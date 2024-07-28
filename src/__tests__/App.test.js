// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;

  // before each test, set AppDOM to render App
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('#1.1 unit: renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('#1.2 unit: render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('#3.1 unit: specify number of all events', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });

});