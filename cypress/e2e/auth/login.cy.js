import LoginPage from "../../pages/login.page";
import AuthResultPage from "../../pages/auth-result.page";

describe("Login", () => {
  let authData;
  let credentials;

  beforeEach(() => {
    cy.fixture("auth-data.json").then((data) => {
      authData = data;
    });

    // Credentials are read from the local, gitignored cypress.env.json file
    cy.env(["login", "password"]).then((env) => {
      expect(env.login, "login in cypress.env.json").to.be.a("string").and.not.be.empty;
      expect(env.password, "password in cypress.env.json").to.be.a("string").and.not.be.empty;
      credentials = env;
    });

    LoginPage.visit();
  });

  it("logs in with valid credentials", () => {
    LoginPage.fillEmail(credentials.login);
    LoginPage.fillPassword(credentials.password);
    LoginPage.submit();

    AuthResultPage.shouldShowMessage("Авторизация прошла успешно");
    AuthResultPage.shouldHaveCloseButton();
  });

  it("rejects an incorrect password", () => {
    LoginPage.fillEmail(credentials.login);
    LoginPage.fillPassword(authData.invalidCredentials.password);
    LoginPage.submit();

    AuthResultPage.shouldShowMessage("Такого логина или пароля нет");
    AuthResultPage.shouldHaveCloseButton();
  });

  it("rejects an unknown login", () => {
    LoginPage.fillEmail(authData.invalidLogin.email);
    LoginPage.fillPassword(credentials.password);
    LoginPage.submit();

    AuthResultPage.shouldShowMessage("Такого логина или пароля нет");
    AuthResultPage.shouldHaveCloseButton();
  });

  it("shows a validation error for an invalid email", () => {
    LoginPage.fillEmail(authData.invalidEmail.email);
    LoginPage.fillPassword(credentials.password);
    LoginPage.submit();

    AuthResultPage.shouldShowMessage(
      "Нужно исправить проблему валидации"
    );
    AuthResultPage.shouldHaveCloseButton();
  });

});
