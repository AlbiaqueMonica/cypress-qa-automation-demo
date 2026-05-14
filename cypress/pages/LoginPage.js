class LoginPage {

  visit() {
    cy.visit('https://automationexercise.com/login')
  }

  enterEmail(email) {
    cy.get('[data-qa="login-email"]').type(email)
  }

  enterPassword(password) {
    cy.get('[data-qa="login-password"]').type(password)
  }

  clickLogin() {
    cy.get('[data-qa="login-button"]').click()
  }

  login(email, password) {
    this.enterEmail(email)
    this.enterPassword(password)
    this.clickLogin()
  }

}

export default new LoginPage()