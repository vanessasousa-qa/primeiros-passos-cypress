import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import NavbarPage from '../pages/navbarPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const navbarPage = new NavbarPage()
const myInfoPage = new MyInfoPage()
const loginPage = new LoginPage()
const chance = new Chance()


describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage(),
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password),

    navbarPage.accessMyInfo(),

    myInfoPage.fillMyPersonalDetails(chance.first(), chance.last(), chance.last()),
    myInfoPage.fillEmloyeeDetails(chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
    chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
    chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }), '2026-15-11'),
    myInfoPage.fillStatus('1990-22-01'),
    myInfoPage.saveForm()
  })
})