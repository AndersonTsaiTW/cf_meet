Feature: Show/Hide Event Details
  Scenario: #2.1 An event element is collapsed by default.
    Given user doesn't click the button to show details
    When the user see the event
    Then the details of the event is hidden

  Scenario: #2.2 User can expand an event to see details.
    Given user has seen the events(e.g, "Firework for Canada day")
    When the user clicks the button on an event
    Then the frame of the event can expand and show more details.

  Scenario: #2.3 User can collapse an event to hide details.
    Given the frame of the event has expanded
    When the user clicks it again
    Then the frame of the event will return to a simple version again