import './app-info.css'

const AppInfo = (props) => {
    
    const companyName = "XYZ"
    const {employeesCount, increasedEmployeesCount, showTotalSalary} = props

    return (
        <div className="app-info">
            <h1>Accounting for employees in "{companyName}"</h1>
            <hr />
            <h3>Total number of employees: {employeesCount}</h3>
            <h3>The award will be given to: {increasedEmployeesCount}</h3>
            <h3>Total salary of all employees: {showTotalSalary}$</h3>
        </div>
    )
}

export default AppInfo