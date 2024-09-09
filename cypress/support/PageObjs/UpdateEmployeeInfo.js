import {UpdateEmployeeInfoObj} from "../Wire/UpdateEmployeeInfoObj";
const emp = new UpdateEmployeeInfoObj();
import {EmployeeInfo} from "./EmployeeInfo";

export class UpdateEmployeeInfo{
    getAnythingDropdown(content, data){
        cy.get(emp.getDropMenu(content)).parent().siblings()
            .find(emp.getDropdown()).click()
            .invoke('text')
            .then((val)=>{
                cy.contains(data).click();
            })
        cy.get(emp.getSaveButton()).then(($val)=> {
            content === 'Blood Type'?
                cy.wrap($val).eq(1).click():cy.wrap($val).first().click();
        })
        let empInfo = new EmployeeInfo();
        return content === 'Blood Type'? this: empInfo;
    }
    checkGender(){
        cy.scrollTo(0, 400);
        cy.get(emp.getGender()).click()
        cy.get(emp.getSaveButton()).first().click();
        let empInfo =  new EmployeeInfo()
        return empInfo
    }
    assertUpdateValue(content, value){
        cy.get(emp.getDropdown()).then(($val)=> {
            content === 'Blood Type'? cy.wrap($val).eq(2).should('have.text', value):cy.wrap($val).first().should('have.text', value);
        })
        let empInfo =  new EmployeeInfo()
        return empInfo
    }




}