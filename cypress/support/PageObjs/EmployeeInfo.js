
const {faker} = require("@faker-js/faker");
const fs = require('fs');
import {AddEmployeeObj} from "../Wire/AddEmployeeObj";
const addEmp = new AddEmployeeObj()
const value = addEmp.getEmployeeIdInput()
const employeeData = "employeeData.json"
import {UpdateEmployeeInfo} from "./UpdateEmployeeInfo";
const update = new UpdateEmployeeInfo()
import {AddEmployeePage} from "./AddEmployeePage";
const addEmpPage = new AddEmployeePage();

export class EmployeeInfo{
    constructor() {
        this.employeeDetails = {}
    }

    getSideMenu(data){
        cy.get(addEmp.getMenu(data)).click();
        return data==='My Info'? update: (data ==='PIM'? addEmpPage: this);
    }

    //search employee id and name
    searchAnything(label_name, value) {
        cy.log(label_name, value)
        cy.get(addEmp.getEmployeeIddInput(label_name)).parent().siblings().find('input')
            .type(value);
        if(label_name === 'Employee Name') cy.get(addEmp.getSpan()).click();
        cy.get(addEmp.getSaveButton()).click().wait(2000)
        return this;
    }
    //assertion
    assertSuccessMessage(text){
        cy.get(addEmp.getSuccessMessage()).should("have.text", `Successfully ${text}`)
        return (text === 'Saved')? this : update
    }
    //Assert value
    nameAssert(contain, fullName){
        cy.get(contain === 'empdetails'? addEmp.getfullNameAssert(fullName):addEmp.getProfileName(fullName)).should("have.text", fullName)
        if(contain === 'empdetails') this.employeeDetails.fullname = fullName;
        return  contain === 'empdetails'? update: this;
    }

    assertValue(input){
        const digitRegex = /^\d+$/;
            cy.get((digitRegex.test(input))?addEmp.getRow():addEmp.getRowName()).invoke('text')
                .then(text => {
                    const uId = (digitRegex.test(input))? (text.match(/\d+/) || [])[0]:text.replace(/\s+/g, ' ').trim();;
                    cy.wait(2000);
                    expect(uId).to.eq(input);
                    cy.log(input)
                })
            return this
    }
    enterId(){
        cy.get(addEmp.getEmployeeIdInput()).parent().siblings('div').find('input')
            .invoke('val').then((value)=>{
            this.employeeDetails.EmployeeId = value;
        })
        return this
    }
    inputAnything(content, data){
        cy.get(addEmp.getName(content)).type(data);
        this.employeeDetails[content] = data;
        return this;
    }
    clickOnToggleCheckbox(){
        cy.get(addEmp.getToggleCheckbox()).click()
        return this
    }
    enterEmployeeDetails(content, data){
        cy.get(addEmp.getDetails(content)).parent().siblings('div').find('input')
            .type(data)
        this.employeeDetails[content] = data;
        return this
    }
    clickOnSaveButton(){
        cy.get(addEmp.getSaveButton()).click()
        return this
    }

    writeJson() {
        // Read the existing data from the file
        cy.readFile(`cypress/fixtures/${employeeData}`).then((data) => {
            data = [];
            data.push(this.employeeDetails);
            cy.writeFile(`cypress/fixtures/${employeeData}`, data);
        });
        return this
    }
}