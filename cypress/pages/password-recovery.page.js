/**
 * Page Object for the password recovery form.
 */
class PasswordRecoveryPage {
  elements = {
    title: "#forgotForm > .header",
    emailInput: "#forgotForm > [name=\"mail\"]",
    submitButton: "#restoreEmailButton",
    closeButton: "#exitRestoreButton > .exitIcon",
  };

  fillEmail(email) {
    cy.get(this.elements.emailInput).clear().type(email);
  }

  submit() {
    cy.get(this.elements.submitButton).click();
  }
}

export default new PasswordRecoveryPage();
