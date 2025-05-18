Feature: End to End Ecommerce validation

Scenario: Ecommerce product delivery
Given I am on Ecommerce page
When I login to the application
And I add items to Cart and checkout
And Validate the total price limit
Then Select the country submit and very Thank you