let accessToken
// Client ID no longer active for security reasons
const clientID = 'c8005f325c344b6f8599d36639d3045c'
const redirectURI = 'http://localhost:3000/'
const scopes = encodeURIComponent('playlist-modify-public playlist-modify-private')

const Spotify = {
    getAccessToken () {
        if (accessToken) {
            return accessToken
        }

        const token = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
        if (token && expiresInMatch) {
            accessToken = token[1]
            const expiresIn = Number(expiresInMatch[1])
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        } else {
            const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes}`
            window.location = url
        }
    },
    async search(term) {
        const accessToken = Spotify.getAccessToken()
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
        const jsonResponse = await response.json()
        if (jsonResponse.error) {
            return []
        }
        return jsonResponse.tracks.items.map((track) => {
            return {
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }
        })
    },
    async savePlaylist(name, trackUris) {
        if (!name || !trackUris) {
            return
        }
        const accessToken = Spotify.getAccessToken()
        const headers = {
            Authorization: 'Bearer ' + accessToken
        }
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers
        })
        const jsonResponse = await response.json()
        const userID = jsonResponse.id
        const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: 'POST',
            headers,
            body: JSON.stringify({name})
        })
        const jsonPlaylistResponse = await playlistResponse.json()
        const playlistID = jsonPlaylistResponse.id
        const trackPlaylistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
            method: 'POST',
            headers,
            body: JSON.stringify({uris: trackUris})
        })
    }
}


export default Spotify
