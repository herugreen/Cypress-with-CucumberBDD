import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login', () => {
    cy.get('#user_login').type('username') //fill username
    cy.get('#user_password').type('password') //fill password
    cy.get('input[name="submit"]').click() //submit form
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})