Feature: Verify Sort Cart Functionality

  Scenario Outline: User should try sort cart

    Given User should be Navigate to the Login Page 
    When User should be login with <userId> and <password>
    And User should be select sort option on cart Page
    Then user sould be see cart item in sorted form

    Examples:
    | userId              | password  |
    | bob@example.com     | 10203040  |