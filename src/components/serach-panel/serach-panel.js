import {Component} from 'react'
import './search-panel.css'

class SearchPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchField: ''
        }
    }

    onSearch = (e) => {
        const term = e.target.value
        this.setState({searchField: term});

        this.props.onUpdateSearch(term)
    }

   render() {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Search an employee"
                onChange={this.onSearch}
            />
        )
   }
}

export default SearchPanel;