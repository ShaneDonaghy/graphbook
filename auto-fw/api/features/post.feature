Feature: Create, Update and Delete a Post

    Scenario: Create a Post
        Given I make a post method request
        And I add the create post graph query
        And I add the create post graph variables
        When I submit the request
        Then the response has a 200 status code
        And the created post has an integer id
