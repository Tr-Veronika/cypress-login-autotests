/**
 * Page Object for the login form.
 * Contains selectors and actions related to authentication.
 */
class LoginPage {
  // Selectors
  elements = {
    title: "#form > .header",
    emailInput: "#mail",
    passwordInput: "#pass",
    submitButton: "#loginButton",
    forgotPasswordButton: "#forgotEmailButton",
  };

  visit() {
    cy.visit("/");
  }

  fillEmail(email) {
    cy.get(this.elements.emailInput).clear().type(email);
  }

  fillPassword(password) {
    cy.get(this.elements.passwordInput).clear().type(password, { log: false});
  }

  submit() {
    cy.get(this.elements.submitButton).click();
  }

  openPasswordRecovery() {
    cy.get(this.elements.forgotPasswordButton).click();
  }
}

export default new LoginPage();
