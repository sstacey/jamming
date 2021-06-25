import React from 'react'
import './App.css';

import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'

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
      }],
      playlistName: 'My First Playlist',
      playlistTracks: [{
        id: 1,
        name: 'Track Name 1',
        artist: 'Artist 1',
        album: 'Album 1'
      },{
        id: 2,
        name: 'Track Name 1',
        artist: 'Artist 2',
        album: 'Album 2'
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
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
