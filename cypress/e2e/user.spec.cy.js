import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import NavbarPage from '../pages/navbarPage'
import MyInfoPage from '../pages/myInfoPage'

const navbarPage = new NavbarPage()
const myInfoPage = new MyInfoPage()
const loginPage = new LoginPage()


describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage(),
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password),

    navbarPage.accessMyInfo(),

    myInfoPage.fillMyPersonalDetails('Jane', 'A.', 'Doe'),
    myInfoPage.fillEmloyeeDetails('123abc', 'abc123', 'DX6789', '2026-15-11'),
    myInfoPage.fillStatus('1990-22-01'),
    myInfoPage.saveForm()
  })
})