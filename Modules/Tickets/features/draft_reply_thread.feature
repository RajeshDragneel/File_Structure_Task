Feature: Draft a reply thread in Ticket view
    As a agent,
    The user should be able to draft a reply thread in a ticket

    Background:
    Given the user logged in as a agent
    And the agent has access to reply in a ticket

    Scenario Outline: Draft a thread in a ticket
        Given there is a ticket to "draft a thread"
        When the user save the thread as draft
        Then the thread is saved as draft and shown in the ticket's conversation tab
        And it can be sent, discarded or edited afterwards

    Scenario: Draft a already drafted thread in a ticket
        Given there is already a drafted thread "It's a small technical issue from our side"
        When the user edits it to "Reload the website and try again"
        And saves the thread as a draft again
        Then the drafted thread should be "Reload the website and try again"
        And there is no new drafted thread should be created

    Scenario: Draft a thread with one more thread in the conversation tab
        Given there is already a drafted thread "Reload the website and try again"
        When the user drafts a new thread "Restart the browser and try again" as draft
        Then the "Restart the browser and try again" thread is saved as a new draft and shown in the ticket's conversation tab
        And the previously drafted thread should be "Reload the website and try again"