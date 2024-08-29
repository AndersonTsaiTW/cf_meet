# CF_FullStack_Ach4_MeetApp
This is an app can help you to scan the upcoming events in the world.  
Welcome to visit: [Meet](https://AndersonTsaiTW.github.io/cf_meet)

* Test-Driven Development
* An app can show events from Google Calendar. Users can search events by city and control the number of events showing on the page.
* Using charts to express the type of events and the event numbers in cities.  
  <img src="https://github.com/user-attachments/assets/ca894d86-ae18-41f7-9f09-cfc8807061b7" width="45%" height="auto" alt="The charts to show the proportions and number of events in different cities.">
  <img src="https://github.com/user-attachments/assets/4c002f74-6473-4f13-8b4f-2623e279e1b7" width="45%" height="auto" alt="The events list.">

## User Stories

* As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city. 
  1. (1.1)Given user hasn’t searched for any city; When the user opens the app; Then the user should see a list of upcoming events.
  2. (1.2)Given the main page is open; When user starts typing in the city textbox; Then the user should receive a list of cities (suggestions) that match what they’ve typed.
  3. (1.3)Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing; When the user selects a city (e.g., “Berlin, Germany”) from the list; Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.  
* As a user, I should be able to show/hide event details, so that I can view more details when I need to or hide them to keep my screen uncluttered.
  1. (2.1)Given user doesn't click the button to show details; When the user see the event; Then the details of the event is hidden.
  2. (2.2)Given user has seen the events(e.g, "Firework for Canada day"); When the user clicks the button on an event; Then the frame of the event can expand and show more details.
  3. (2.3)Given the frame of the event has expanded; When the user clicks it again; Then the frame of the event will return to a simple version again.
* As a user, I should be able to specify the Number of events, so that I know how many events I am interested in and focus on.
  1. (3.1)Given user hasn’t searched for any city; When the user opens the app; Then the user should see the total number of events.
  2. (3.2)Given user finds the textbox of the number of events; When user types a specific number in the textbox; Then the user should see the specific number of events.
* As a user, I should be able to use the App when offline, so that I can access and interact with the event information at any time whether I have internet or not.
  1. (4.1)Given user has turned off their internet; When the user opens the app; Then the app can run normally.
* As a user, I should be able to add an app shortcut to the home screen, so that I can quickly access the app.
  1. (5.1)Given user has installed the app on their device; When they choose the option to add the app shortcut to their home screen; Then an app shortcut will be added to their home screen.
* As a user, I should be able to display charts visualizing event details, so that I can easily understand the events.
  1. (6.1)Given user has seen a list of upcoming events; When the user clicks the icon to visualize events; Then the app will show the graph.
     

## Important Tools
- **JavaScript**: Primary language 
- **React**
- **Recharts ^2.12.7**: React-based library for building responsive charts.
- **Google OAuth**: Using Google accounts to simplify logins
- **AWS Lambda**: Serverless function - Runs code in response to events
- **Jest**: JavaScript testing framework for Unit tests and Integrating tests.
- **jest-cucumber**: Integrates Behavior-Driven Development (BDD) testing with Jest.
- **Puppeteer**: End-to-end testing(Chrome)
- **PWA**: Web apps => like native apps(offline capability)
