import { Component } from 'react'
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '', 
        }
    }

    onChangeInput = (e) => {
        this.setState(({
            [e.target.name]: e.target.value
        }))
    }

    
    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state
        const {onAdd} = this.props

        return (
            <div className="app-add-form">
                <h3>Add a new Employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is the name of the employee?" 
                        onChange={this.onChangeInput}
                        value={name}
                        name="name"/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary, $?" 
                        onChange={this.onChangeInput}
                        value={salary}
                        name="salary"/>
                    <button
                            className="btn btn-outline-light new-post-submit"
                            onClick={() => onAdd(name, salary)}>Add</button>
                </form>
                <p className='statusMessage'>{this.props.status}</p>
            </div>
        )
    }
} 

export default EmployeesAddForm