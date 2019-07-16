#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: To add Customer

  @tag1
  Scenario: To add Customer
    Given The user should be telecom homepage and click the Add Customer
    When The user should provide valid details
      | fname   | johnson                |
      | lname   | aswin                  |
      | email   | johnsonsgnya@gmail.com |
      | address | chennai                |
      | phone   |             7299629464 |
    Then The user should validate the Customer ID
