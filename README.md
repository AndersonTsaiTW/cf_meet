# CF_FullStack_Ach4_MeetApp
This is an app can help you to scan the upcoming events in the world.  
Welcome to visit: [Meet](https://AndersonTsaiTW.github.io/cf_meet)

### User Stories
* As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.
  1. (1.1)Given user hasn’t searched for any city; When the user opens the app; Then the user should see a list of upcoming events.
  2. (1.2)Given the main page is open; When user starts typing in the city textbox; Then the user should receive a list of cities (suggestions) that match what they’ve typed.
  3. (1.3)Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing; When the user selects a city (e.g., “Berlin, Germany”) from the list; Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.
* As a user, I should be able to show/hide event details, so that I can view more details when I need to or hide them to keep my screen uncluttered.
  1. (2.1)Given user has seen the events(e.g, "Firework for Canada day"); When the user clicks the event; Then the frame of the event can expand and show more details.
  2. (2.2)Given the frame of the event has expanded; When the user clicks it again; the frame of the event will return to a simple version again.
* As a user, I should be able to specify the Number of events, so that I know how many events I am interested in and focus on.
  1. (3.1)Given user hasn’t searched for any city; When the user opens the app; Then the user should see the total number of events.
  2. (3.2)Given user was typing “Berlin” in the city textbox; When the list of suggested cities is showing; Then the user should see the total number of events in Berlin.
* As a user, I should be able to use the App when offline, so that I can access and interact with the event information at any time whether I have internet or not.
  1. (4.1)Given user has turned off their internet; When the user opens the app; Then the app can run normally.
* As a user, I should be able to add an app shortcut to the home screen, so that I can quickly access the app.
  1. (5.1)Given user has installed the app on their device; When they choose the option to add the app shortcut to their home screen; Then an app shortcut will be added to their home screen.
* As a user, I should be able to display charts visualizing event details, so that I can easily understand the events.
  1. (6.1)Given user has seen a list of upcoming events; When the user clicks the icon to visualize events; Then the app will show the graph.
