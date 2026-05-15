import LoginPage from '../pages/LoginPage'

describe('Login Test', () => {

  it('Should login successfully with valid credentials', () => {

    cy.env(['email', 'password']).then((env) => {

      LoginPage.visit()

      LoginPage.login(
        env.email,
        env.password
      )

      cy.contains('Logged in as').should('be.visible')

    })

  })
})