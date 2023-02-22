import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../serach-panel/serach-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './App.css'

class App extends Component {

    state = {
        data: [
            {name: "John Smith", salary: 1100, increase: false, like: true, id: 1},
            {name: "Alex Shulz", salary: 3400, increase: true, like: false, id: 2},
            {name: "Vasya Pupkin", salary: 600, increase: false, like: false, id: 3},
        ], 
        addingStatus: '', 
        searchField: '', 
        filter: 'all', 
    }

    constructor(props) {
        super(props)
        this.lastId = 4
    }

    deleteItem = (id) => {
        this.setState( ({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        } )
    }

    addItem = (name, salary) => {
        if (name === '' || salary === '') {
            this.setState({addingStatus: 'Write an employees name and salary'})
            return
        }

        const newItem = {
            name: name,
            salary: +salary,
            increase: false,
            like: false,
            id: this.lastId++
        }
        this.setState( ({data}) => {
            const newArr = [...data, newItem] 
            // сохраняем принципы имунтабильности - не изменяем внутренности, а создаем новый массив
            return {
                data: newArr
            }
        })
        this.setState({addingStatus: ''})
    }

    onIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                } 
                return item
            })
        }))
    }

    onLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                } 
                return item
            })
        }))
    }

    onSearchParent = (data, field) => {
        if (field.length < 1) return data
        
        return this.state.data.filter(item => item.name.indexOf(field) > -1)
    }

    onUpdateSearch = (term) => this.setState({searchField: term})

    onFilter = (data, filter) => {
        switch (filter) {
            case 'promotion': 
                return data.filter(item => item.increase)
            case 'moreThan1000': 
                return data.filter(item => item.salary > 999)
            default: 
                return data
        }
    }

    onFilterSelect = (filter) => this.setState({filter})

    onSalaryChange = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: salary}
                }

                return item
            })
        }))
    }

    render() {
        const {data, searchField} = this.state
        const showTotalSalary = this.state.data.reduce( (sum, cur) => cur.salary + sum, 0)
        const showIncreasedEmployeesCount = this.state.data.filter(item => item.increase === true).length
        const visibleData = this.onFilter(this.onSearchParent(data, searchField), this.state.filter)

        return (
            <div className="App">
                <AppInfo 
                    employeesCount={this.state.data.length}
                    increasedEmployeesCount={showIncreasedEmployeesCount}
                    showTotalSalary={showTotalSalary} 
                />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filter={this.state.filter}
                        onFilterSelect={this.onFilterSelect}
                    /> 
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={id => this.deleteItem(id)}
                    onIncrease={this.onIncrease}
                    onLike={this.onLike}

                    onSalaryChange={this.onSalaryChange}
                    
                    showedItems={this.onFilter(this.onSearchParent(data, searchField), this.state.filter).length}
                    allEmployees={data.length}
                />
                <EmployeesAddForm 
                    onAdd={this.addItem} 
                    status={this.state.addingStatus}/>
            </div>
        )
    }
}


export default App
