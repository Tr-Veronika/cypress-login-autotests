import LoginPage from "../../pages/login.page";
import AuthResultPage from "../../pages/auth-result.page";

describe("Login - known bugs", () => {
  let authData;
  let credentials;

  beforeEach(() => {
    cy.fixture("auth-data.json").then((data) => {
      authData = data;
    });

    // Credentials are read from the local, gitignored cypress.env.json file
    cy.env(["password"]).then((env) => {
      expect(env.password, "password in cypress.env.json").to.be.a("string").and.not.be.empty;
      credentials = env;
    });

    LoginPage.visit();
  });

  it("accepts an email containing uppercase letters", () => {
    // Known defect: the application is expected to normalize the email to lowercase.
   LoginPage.fillEmail(authData.mixedCaseEmail.email);
   LoginPage.fillPassword(credentials.password);
   LoginPage.submit();

   AuthResultPage.shouldShowMessage("Авторизация прошла успешно");
   AuthResultPage.shouldHaveCloseButton();
  })
});