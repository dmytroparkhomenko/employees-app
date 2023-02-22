import './employees-list-item.css'

const EmployeesListItem = (props) => {

let defaultStylesLi = 'list-group-item d-flex justify-content-between'
    const {name, salary, onDelete, onIncrease, onLike, increase, like} = props

    if (increase === true) {
        defaultStylesLi += ' increase'
    }

    if (like === true) {
        defaultStylesLi += ' like'
    }

    const postNewSalary = (e) => {
        props.onSalaryChange(props.id, +e.target.value.replace(/\$/, ''))
    }

    return (
        <li className={defaultStylesLi}>
            <span onClick={onLike} className="list-group-item-label">{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + "$"}
                onChange={postNewSalary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    ) 
}

export default EmployeesListItem