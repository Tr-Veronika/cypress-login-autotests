import PasswordRecoveryPage from "../../pages/password-recovery.page";
import LoginPage from "../../pages/login.page";
import AuthResultPage from "../../pages/auth-result.page";


describe("Password recovery", () => {
  let authData;

  beforeEach(() => {
    cy.fixture("auth-data.json").then((data) => {
      authData = data;
    });

    LoginPage.visit();
    LoginPage.openPasswordRecovery();
  });

  it("submits a password recovery request", () => {
    PasswordRecoveryPage.fillEmail(authData.passwordRecovery.email);
    PasswordRecoveryPage.submit();

    AuthResultPage.shouldShowMessage(
      "Успешно отправили пароль на e-mail"
    );
    AuthResultPage.shouldHaveCloseButton();
  });
});
