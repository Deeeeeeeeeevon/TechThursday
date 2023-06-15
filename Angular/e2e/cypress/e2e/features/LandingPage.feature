Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background:
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard

    Scenario: As a TOH user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        Then the user shall see the top 4 Heroes displayed

    Scenario: As a TOH user, I want to select a hero from the dashboard in order to see the hero details displayed
        When the user selects a hero from the dashboard
        Then the hero's details are displayed

    Scenario: As a TOH user, I want to navigate to heroes page in order to see 8 heroes
        When the user clicks the heros button
        Then the user is navigated to the heroes page.

    Scenario: As a TOH user, I want to remove a hero in order to see the hero list decrease
        When the user clicks the delete button next to hero
        Then the hero is deleted

    Scenario: As a TOH user, I want to add a hero in order to see the hero list increase
        When the user clicks the Add button next to hero
        And the hero has a name
        Then the hero is added

    Scenario: As a TOH user, I want to add a hero without a name in order to see the hero list remain the same
        When the user clicks the Add button next to hero
        And the hero has no name
        Then the hero is not added