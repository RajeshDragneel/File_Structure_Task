Feature: CRUD on Tickets

    As a agent,
    The user can add a ticket in the tickets module

    Background:
        Given the user has logged into their account
        And navigated to the tickets module

    Scenario Outline: add ticket with various inputs
        Given the user is in tickets module
        When the user creates a ticket with <name>, <mail>, <subject> and <option>
        Then the ticket should <outcome> created

        Examples:
        | name  | mail                     | subject | option  | outcome |
        | Zeref | zeref.dragneel@gmail.com | Low MP  | twitter | be      |
        |       | zeref.dragneel@gmail.com | Low MP  | twitter | not be  |
        | Zeref |                          | Low MP  | mail    | not be  |
        | Zeref | zeref.dragneel@gmail.com |         | mail    | not be  |
        | ' '   | zeref.dragneel@gmail.com | Low MP  | twitter | not be  |
        | Zeref | ' '                      | Low MP  | mail    | not be  |
        | Zeref | zeref.dragneel@gmail.com | ' '     | mail    | not be  |

    Scenario Outline: edit ticket with various inputs
        Given the user is in tickets module
        When the user updates a ticket with <name>, <mail>, and <subject>
        Then the ticket should <outcome> updated

        Examples:
        | name   | mail             | subject      | option  | outcome |
        | Rajesh | rajesh@gmail.com | Need potion  | twitter | be      |
        |        | rajesh@gmail.com | Need potion  | twitter | not be  |
        | Rajesh |                  | Need potion  | mail    | not be  |
        | Rajesh | rajesh@gmail.com |              | mail    | not be  |
        | ' '    | rajesh@gmail.com | Need potion  | twitter | not be  |
        | Rajesh | ' '              | Need potion  | mail    | not be  |
        | Rajesh | rajesh@gmail.com | ' '          | mail    | not be  |

    Scenario: delete one ticket
        Given the user is in tickets module
        When the user deletes a ticket
        Then the ticket should not be listed in the tickets module

    Scenario: delete all tickets
        Given the user is in tickets module
        When the user deletes all the tickets
        Then no tickets should be listed in the tickets module