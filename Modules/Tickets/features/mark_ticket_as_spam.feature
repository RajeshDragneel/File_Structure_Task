Feature: Mark a ticket as spam
    As a agent
    The user should be able to mark the ticket as spam

    Background: 
        Given the user logged in as a agent
        And the user has access to update tickets

    Scenario: mark a ticket as spam
        Given there is a ticket "Mark as spam"
        When the user marks the selected ticket as spam
        And confirms the process in the confirmation box
        Then the ticket should be moved to the 'Spam Tickets' view

    Scenario: mark all tickets as spam
        Given there is more than one ticket to "Mark as spam"
        When the user marks the selected tickets as spam
        And confirms the process in the confirmation box
        Then the tickets should be moved to the 'Spam Tickets' view

    Scenario: mark the ticket and associated contact as spam
        Given there is a ticket "Mark as spam"
        When the user marks the selected ticket as spam
        And confirms the process in the confirmation box with the 'Mark the associated contact also as spam' option checked
        Then the ticket and contact should be moved to the 'Spam Tickets' and 'Spam Contacts' view respectively

    Scenario: mark all the tickets and associated contacts as spam
        Given there is more than one ticket to "Mark as spam"
        When the user marks the selected tickets as spam
        And confirms the process in the confirmation box with the 'Mark the associated contact also as spam' option checked
        Then the tickets and contacts should be moved to the 'Spam Tickets' and 'Spam Contacts' view respectively