import { useEmployee } from "./employeeDataProvider.js";
import Employee from "./Employee.js";

const EmployeeList = () => {

    const employeeElement = document.querySelector(".employeeContainer")
    const employees = useEmployee()

    let employeeHTMLRepresentations = ""
    for (const employeeObjects of employees) {
        employeeHTMLRepresentations += Employee(employeeObjects)
    }

    employeeElement.innerHTML = `
        <h4 class="header">Employees</h4>
        ${employeeHTMLRepresentations}
`
}

export default EmployeeList