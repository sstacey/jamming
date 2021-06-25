import React from 'react'
import './App.css';

import SearchResults from '../SearchResults/SearchResults.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{
        id: 1,
        name: 'Track Name',
        artist: 'Artist',
        album: 'Album'
      },{
        id: 2,
        name: 'Im on one',
        artist: 'Lil Wayne',
        album: 'The Carter 3'  
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
