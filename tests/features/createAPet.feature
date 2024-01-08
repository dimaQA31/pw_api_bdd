Feature: Create a pet

Scenario: Positive scenario

When Create a pet with url: "/pet"
Then Verify response of created pet

Scenario: Negative scenario - wrong url

When Create a pet with url: "/pets"
Then Verify error in response is "null for uri"