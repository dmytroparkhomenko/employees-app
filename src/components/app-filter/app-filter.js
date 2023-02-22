import './app-filter.css'

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', text: "All employees"},
        {name: 'promotion', text: "For promotion"},
        {name: 'moreThan1000', text: "Salary over $1000"},
    ]

    const showButtons = buttonsData.map( ({name, text}) => {
        const activeEl = props.filter === name
        return (
            <button 
                type='button'
                className={`btn ${activeEl ? "btn-light" : "btn btn-outline-light"}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {text}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {showButtons}
        </div>
    ) 
}

export default AppFilter