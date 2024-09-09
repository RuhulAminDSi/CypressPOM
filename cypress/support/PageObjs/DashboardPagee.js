import DashboardPageObj from "../Wire/DashboardPageObj";
const header = new DashboardPageObj();
import {EmployeeInfo} from "./EmployeeInfo";

class DashboardPagee{
    dashboardVisible(){
        cy.get(header.getDashboardHeader()).should("have.text", "Dashboard")
        return this
    }
    PIMVisible(){
        let empInfo = new EmployeeInfo()
        return empInfo;
    }

}
export default DashboardPagee