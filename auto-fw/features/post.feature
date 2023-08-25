Feature: Test Post Feature

  Scenario Outline: As a user, I want to be able to write a post on Graphbook

    Given I am on the home page
    When I type <message> in the post text field
    And I click submit
    Then the top post will contain <message>

    Examples:
      | message                       |
      | Automated Test Posting        |
      | Second Automated Test Posting |

