class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordFild: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username),
        cy.get(this.selectorsList().passwordFild).type(password),
        cy.get(this.selectorsList().loginButton).click()
    }

    checkErrorMessage() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage