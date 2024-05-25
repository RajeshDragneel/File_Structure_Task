Feature: CRUD on Contacts

    As a agent,
    The user can add a contact in the contacts module

    Background:
        Given the user has logged into their account
        And navigated to the contacts module

    Scenario Outline: add contact with various inputs
        Given the user is in contacts module
        When the user creates a contact with <name>, <mail> and <phone>
        Then the contact should <outcome> created

        Examples:
        | name  | mail                  | phone      | outcome |
        | Test  | testcontact@gmail.com | 9876543210 | be      |
        |       | testcontact@gmail.com | 9876453211 | not be  |
        | Test  |                       | 9876534250 | not be  |
        | Test  | testcontact@gmail.com |            | not be  |
        | ' '   | testcontact@gmail.com | 9875643277 | not be  |
        | Test  | ' '                   | 7896543510 | not be  |
        | Test  | testcontact@gmail.com | ' '        | not be  |

    Scenario: delete one contact
        Given the user is in contacts module
        When the user deletes a contact
        Then the contact should not be listed in the contacts module

    Scenario: delete all contacts
        Given the user is in contacts module
        When the user deletes all the contacts
        Then no contacts should be listed in the contacts module