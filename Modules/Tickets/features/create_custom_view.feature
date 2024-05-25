Feature: Create a custom view in Ticket module

    As a agent
    The user should be able to create a custom view in ticket module
    So that tickets can be grouped by a criteria and listed in tickets module

    Background:
        Given the user logged in as a agent
        And the agent has the access to create custom views

    Scenario Outline: Create a custom view in the Ticket module
        Given there is no views with the name <view_name> in the views list
        And the user have a <criteria>, <visibility> to create custom view
        When the user successfully creates a custom view
        Then the custom view should be listed in the views list as <view_name>
        And it should only be accessible to the ones that have access

        Examples:
        ╔══════════════╦═══════════════╦═════════════════╗
        ║ view_name    ║ criteria      ║ visibility      ║
        ╠══════════════╬═══════════════╬═════════════════╣
        ║ HighPriority ║ status:high   ║ Only me         ║
        ╠══════════════╬═══════════════╬═════════════════╣
        ║ Overdue      ║ due_date:now  ║ All Agents      ║
        ╠══════════════╬═══════════════╬═════════════════╣
        ║ EmptyMail    ║ mail:empty    ║ Specific Agents ║
        ╚══════════════╩═══════════════╩═════════════════╝

    Scenario: create custom view with non existing name
        Given a view "New View" not exists
        And the criteria is valid
        When the custom view is created with the given data
        Then the "New View" should be listed in the views list
        And the view should list the grouped tickets based on the criteria

    Scenario: create custom view with existing view name
        Given a view "Same View" exists
        And the criteria is valid
        When the custom view is created with the given data
        Then an error should show up informing "Custom View name already exists"
        And the "Same View" should not be overridden

    Scenario: create custom view without view name
        Given there is no view name to create a custom view
        When the custom view is created with the given data
        Then an error should show up informing "View Name cannot be blank"
        And the view should not be created

    Scenario: create custom view without view criteria
        Given there is no view criteria to create a custom view
        When the custom view is created with the given data
        Then an error should show up informing "Please specify the filter criteria"
        And the view should not be created

    Scenario: cancel the create custom view process
        Given the user have entered the data in their respective fields
        When the user cancels the custom view creation process
        Then the custom view shouldn't be created