/**
 * Page Object for authentication result messages.
 */
class AuthResultPage {
  elements = {
    title: "#messageHeader",
    closeButton: "#exitMessageButton > .exitIcon",
  };

  shouldShowMessage(message) {
    cy.get(this.elements.title)
      .should("be.visible")
      .and("contain", message);
  }

  shouldHaveCloseButton() {
    cy.get(this.elements.closeButton).should("be.visible");
  }

  close() {
    cy.get(this.elements.closeButton).click();
  }
}

export default new AuthResultPage();
