import React from 'react'

import './TrackList.css'

class TrackList extends React.Component {

    render() {
        const searchResults = this.props.searchResults.map((track) => {
            return (
                <div className="Track" key={track.id}>
                    <p>Song Name: {track.name}</p>
                    <p>Album: {track.album}</p>
                    <p>Artist: {track.artist}</p>
                </div>
            )
        })
        return (
            <div className="TrackList">
                {searchResults}
            </div>
        )
    }
}

export default TrackList