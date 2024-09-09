import {Null} from "asn1/lib/ber/types";

const addd = "button[type='button']:contains('Add')"

const getId = "label:contains('Employee Id')"
const getIdd = "label:contains";
const firstName = "input[name='firstName']"
const lastName = "input[name='lastName']"
const toggleCheckbox = "label span"
const label = "label:contains";
const saveButton = "button[type='submit']"
const successMessage = "p[class*='oxd-text--toast-message']"
const fullNameAssert = "h6:contains"
const  rowId = ".oxd-table-cell";
const fullName = 'label:contains("Employee Name")'
const span = '.oxd-autocomplete-option > span';
const rowName = ".orangehrm-directory-card-header";
const profileName = 'p.oxd-userdropdown-name';
const sidemenu = 'ul li a span:contains'

export class AddEmployeeObj{
    getMenu(data){
      return sidemenu + `(${data})`;
    }
    getAddButton(){
        return addd;
    }
    getEmployeeIdInput() {
        return getId
    }
    getEmployeeIddInput(label){
        return getIdd+`(${label})`;
    }
    getName(content){
        return content === 'firstName'? firstName:lastName;
    }
    getDetails(data){
        return label + `(${data})`+ (data==='Password'? `:not(:contains('Confirm'))`:`` );
    }
    getToggleCheckbox(){
        return toggleCheckbox
    }
    getSaveButton(){
        return saveButton
    }
    getSuccessMessage(){
        return successMessage
    }
    getfullNameAssert(fullname){
        return fullNameAssert + `(${fullname})`;
    }
    getRow(){
        return rowId;
    }
    getSpan(){
        return span;
    }
    getRowName(){
        return rowName;
    }
    getProfileName(){
        return profileName;
    }



}