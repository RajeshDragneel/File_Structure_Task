Feature: Move a ticket to other department

  As a agent
  The user should be able to move a ticket from one department to other
  So that the ticket can be resolved by a professional

  Background:
    Given the user logged in as a agent
    And the agent have access to move the ticket to other departments in the same portal

  Scenario: move a ticket to other department
    Given there is a ticket "Move to a department"
    When the user moves the ticket to other department
    And the user confirms the move of the ticket in confirmation box
    Then the ticket should not be listed in the previous department
    And the ticket should be listed in the department where the ticket was moved to

  Scenario: cancel the movement of the ticket
    Given there is a ticket "Move to a department"
    When the user moves the ticket to other department
    And the user cancels the move of the ticket in confirmation box
    Then the ticket should not be moved to the other department
    And the ticket should be listed in the department