import React, {useState} from "react";

function Department({selectedDepartment}) {
const [department, setDepartment] = useState("");


const departmentChange = (e) => {
    const department = e.target.value
    setDepartment(department);
    selectedDepartment(department)

}

    return (
        <select name="department" className="select-from" id="department" onChange={departmentChange}>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="hr">Human Resources</option>
            <option value="legal">Legal</option>
        </select>
    )
}
export default Department