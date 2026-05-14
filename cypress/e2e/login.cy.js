import LoginPage from '../pages/LoginPage'

describe('Login Test', () => {

  it('Should login successfully with valid credentials', () => {

    LoginPage.visit()

    LoginPage.login(
      'amonica1963@yahoo.com.ar',
      'amonica1963'
    )

    cy.contains('Logged in as').should('be.visible')

  })

})