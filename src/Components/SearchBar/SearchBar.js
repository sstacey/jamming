import React from 'react'

import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 'Search'
        }
        this.search = this.search.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
    }

    search() {
        this.props.onSearch(this.state.searchTerm)
    }

    handleTermChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} defaultValue={this.state.searchTerm} />
                <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar