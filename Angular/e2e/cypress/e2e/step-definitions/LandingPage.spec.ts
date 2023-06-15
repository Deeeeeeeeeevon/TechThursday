import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

var cnt: number;

Given(/^the user is on the landing page$/, () => {
    cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
    return true;
});

Then(/^the user shall see the top 4 Heroes displayed$/, () => {
    cy.get('.heroes-menu').children().should('have.length', 4)
});

When(/^the user selects a hero from the dashboard$/, () => {
    cy.get('.heroes-menu').children().first().click();
});

Then(/^the hero's details are displayed$/, () => {
    cy.url().should('include', 'http://localhost:4200/detail')
});

When(/^the user clicks the heros button$/, () => {
    cy.get('a[href="/heroes"]').click();
});

Then(/^the user is navigated to the heroes page.$/, () => {
    cy.url().should('include', 'http://localhost:4200/heroes')
    cy.get('.heroes').children().then($elements =>
    {
        cy.get('.heroes').children().should('have.length', $elements.length)
    })
});

When(/^the user clicks the delete button next to hero$/, () => {
    cy.get('a[href="/heroes"]').click();
    cy.get('.heroes').children().then($elements =>
    {
        cnt = $elements.length
    })

    cy.get('.delete').first().click();
});

Then(/^the hero is deleted$/, () => {
    cy.get('.heroes').children().should('have.length', cnt-1)
});

When(/^the user clicks the Add button next to hero$/, () => {
    cy.get('a[href="/heroes"]').click();
    cy.get('.heroes').children().then($elements =>
    {
        cnt= $elements.length
    })
});

When(/^the hero has a name$/, () => {
    cy.get('[id=new-hero]').type("Helo World")
    cy.get('.add-button').first().click();
});

Then(/^the hero is added$/, () => {
    cy.get('.heroes').children().should('have.length', cnt+1)
});

When(/^the user clicks the Add button next to hero$/, () => {
    cy.get('a[href="/heroes"]').click();
    cy.get('.heroes').children().then($elements =>
    {
        cnt = $elements.length
    })
});

When(/^the hero has no name$/, () => {
    cy.get('[id=new-hero]').clear()
    cy.get('.add-button').first().click();
});

Then(/^the hero is not added$/, () => {
    cy.get('.heroes').children().should('have.length', cnt)
});