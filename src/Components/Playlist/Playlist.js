import './Playlist.css'

export class Playlist extends React.Component {

    render() {
        const defaultValue = 'New Playlist'
        return (
            <div className="Playlist">
                <input value={defaultValue}/>
                {/* <!-- Add a TrackList component --> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}