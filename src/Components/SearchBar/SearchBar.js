import React from 'react'

import Spotify from '../../util/Spotify.js'

import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 's'
        }
        this.search = this.search.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
    }

    search() {
        this.props.onSearch(this.state.searchTerm)
        Spotify.search()
    }

    handleTermChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" defaultValue="Search" />
                <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar