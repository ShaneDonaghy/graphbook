Feature: Test Chat Feature Feature

  @debug
  Scenario Outline: As a user, I want to be able to send a chat message on Graphbook

    Given I am on the home page
    When I open the top chat window
    And I type <message> in the chat text field
    And I press enter key
    Then the bottom chat message will contain <message>

    Examples:
      | message                       |
      | Automated Test Posting        |
      | Second Automated Test Posting |
