class MyInfoPage {

    selectorsList() {

        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            nationalityCombobox: ".oxd-select-dropdown > :nth-child(27)",
            genericCombobox: ".oxd-select-text--arrow",
            maritalStatusCombobox: ".oxd-select-dropdown > :nth-child(4)",
            genderButton: ".oxd-radio-wrapper",
            submitButton: ".orangehrm-left-space"
        }

        return selectors
    }

    fillMyPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName),
        cy.get(this.selectorsList().middleNameField).clear().type(middleName),
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmloyeeDetails(employeeId, otherId, driversLicense, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId),
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId),
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense),
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate),
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true }),
        cy.get('body').should('contain', 'Successfully Updated'),
        cy.get('.oxd-toast-close')
    }

    fillStatus(dateOfBirth) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click(),
        cy.get(this.selectorsList().nationalityCombobox).click(),
        cy.get(this.selectorsList().genericCombobox).eq(1).click(),
        cy.get(this.selectorsList().maritalStatusCombobox).click(),
        cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth),
        cy.get(this.selectorsList().dateCloseButton).click(),
        cy.get(this.selectorsList().genderButton).eq(1).click()
    }

}

export default MyInfoPage