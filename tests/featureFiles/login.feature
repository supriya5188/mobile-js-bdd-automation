Feature: Verify Login Functionality

  Scenario Outline: User should try to  log in with differnet credentials

    Given User should be Navigate to the Login Page 
    When User should be login with <userId> and <password>
    Then Expected replay should be <expectedReplay> 

    Examples:
      | userId              | password  | expectedReplay                                              |
      | alice@example.com   | 10203040  | Sorry, this user has been locked out.                       |
      | 1@2.com             | f-o-o     | Provided credentials do not match any user in this service. |
      |                     |           | Username is required                                        |
      | bob@example.com     |           | Password is required                                        |
      | bob@example.com     | 10203040  | Logged In! since Go shopping button is displayed            |