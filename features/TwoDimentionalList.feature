@tag
Feature: To add Customer

  @tag1
  Scenario: To add Customer
    Given The user should be telecom homepage and click the Add Customer
    When The user should provide valid details
      | aswin   | devaraj  | aswindevaraj@gmail.com | chennai | 8765587987 |
      | maria   | charles  | charles@gmail.com      | chennai | 3365457656 |
      | johnson | nickolas | johnson@gmail.com      | chennai | 9976545334 |
      | praveen | devaraj  | praveen@gmail.com      | chennai | 7299629464 |
    Then The user should validate the Customer ID
