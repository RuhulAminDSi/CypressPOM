// Import the Faker library
const { faker } = require('@faker-js/faker');
import DashboardPagee from "../support/PageObjs/DashboardPagee";
const dashboard = new DashboardPagee()
import {AddEmployeePage} from "../support/PageObjs/AddEmployeePage";
const addEmp = new AddEmployeePage()
import {Reusables} from "../support/PageObjs/Reusables";
const Reusable = new Reusables()
import {EmployeeInfo} from "../support/PageObjs/EmployeeInfo";
const emp = new EmployeeInfo()

import {UpdateEmployeeInfo} from "../support/PageObjs/UpdateEmployeeInfo";
const update = new UpdateEmployeeInfo()

describe('OrangeHRM End to End Testing', () => {
    // Hooks
    beforeEach(() => {
        cy.login();
    });
    afterEach(()=>{
        cy.logout();
    })

    it('Validate the whole OrangeHRM flow for Admin', () => {
        const adminUserName = "Admin"
        const adminPassword = "admin123"
        cy.loginUser(adminUserName, adminPassword)

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const fullName = firstName + " "+ lastName;
        const username = firstName+lastName;
        const password = Reusable.generateRandomPassword()
        const uid = faker.random.numeric(10)
        const nationality = 'Bangladeshi'

        dashboard
             .dashboardVisible().PIMVisible()
             .getSideMenu('PIM')
             .clickAdd()
        emp
            .inputAnything('firstName',firstName).inputAnything('lastName',lastName).enterId()
            .clickOnToggleCheckbox()
            .enterEmployeeDetails('Username',username)
            .enterEmployeeDetails('Password',password).enterEmployeeDetails('Confirm Password', password)
            .clickOnSaveButton().assertSuccessMessage('Saved')
            .writeJson()
            .nameAssert('empdetails',fullName)
            .getAnythingDropdown('Nationality',nationality).assertSuccessMessage('Updated').assertUpdateValue('nationality',nationality)
            .getSideMenu('PIM');

        cy.readFile(`cypress/fixtures/employeeData.json`).then((data) =>{
            const uid = data[0].EmployeeId;
            emp
                .searchAnything('Employee Id', uid).assertValue(uid)
                .getSideMenu('Directory')
                .searchAnything('Employee Name', data[0].firstName).assertValue(data[0].fullname)
        })
    })

    it('Validate Flow for New User',()=> {
        cy.fixture(`employeeData.json`).then((item) => {
            const username = item[0].Username;
            const password = item[0].Password
            const fullName = item[0].fullname;
            const bg = 'B+';
            cy.log(username)
            cy.loginUser(username, password)
            emp
                .nameAssert('profile',fullName)
                .getSideMenu('My Info')
                .checkGender().assertSuccessMessage('Updated')
                .getAnythingDropdown('Blood Type',bg).assertUpdateValue('Blood Type', bg).assertSuccessMessage('Saved')
        })
    });

});
