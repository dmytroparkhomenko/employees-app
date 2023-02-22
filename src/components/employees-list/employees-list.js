import {Component} from 'react'
import EmployeesListItem from '../employees-list-item/employees-list-item'

const appListStyles = {
    marginTop: "30px",
    backgroundColor: "#3d5a80",
    borderRadius: "4px",
    boxShadow: "15px 15px 30px rgba(0,0,0, 0.15)",
    color: "#fff"
}

class EmployeesList extends Component {

    render() {

        const {data, onDelete, onIncrease, onLike, showedItems, allEmployees} = this.props

        const elements = data.map(item => {
            const {id, ...props} = item; 
    
            return <EmployeesListItem 
                key={id} {...props}
                id={id}
                onDelete={() => onDelete(id)}
                onIncrease={() => onIncrease(id)}
                onLike={() => onLike(id)}
                onSalaryChange={this.props.onSalaryChange}
            />
        })
    
        return (
            <>
               
                <ul className="list-group" style={appListStyles}>
                    {elements}
                </ul>
                <p className='showedItems'>Showed {showedItems} from {allEmployees}</p>
            </>
        )
    }
}

export default EmployeesList