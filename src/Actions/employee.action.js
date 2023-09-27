export const setEmployee = (employeeData) => {
    return {
        type: 'SET_EMPLOYEE',
        payload: employeeData
    }
}
export const clearEmployee = () => {
    return {
        type: 'CLEAR_EMPLOYEE'
    }
}
