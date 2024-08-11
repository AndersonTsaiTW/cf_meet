Feature: Specify Number Of Events
  Scenario: #3.1 Uesr can see the number of total events by default.
    Given user hasn’t searched for any city
    When the user opens the app
    Then the user should see the total number of events

  Scenario: #3.2 User can change the number of shown events.
    Given user finds the textbox of the number of events
    When user types a specific number in the textbox
    Then the user should see the specific number of events
