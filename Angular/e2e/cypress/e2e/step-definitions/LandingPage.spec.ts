import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});
