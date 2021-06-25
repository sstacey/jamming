import React from 'react'

import './TrackList.css'

import Track from '../Track/Track.js'

class TrackList extends React.Component {

    render() {
        const searchResults = this.props.trackList.map((track) => {
            return (
                <Track track={track} />
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