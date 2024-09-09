const labeldrop = 'label:contains';
const dropdown = '.oxd-select-text-input'
const getSave = 'button[type="submit"]'
const gender = 'label:contains("Male")'
const saveGender = 'input[type="radio"][value="1"]';
const bg = 'label:contains("Blood Type")'
export class UpdateEmployeeInfoObj{
    getDropMenu(data){
        return labeldrop + `(${data})`;
    }
    getDropdown(){
        return dropdown
    }
    getSaveButton(){
        return getSave
    }
    getGender(){
        return gender
    }

}