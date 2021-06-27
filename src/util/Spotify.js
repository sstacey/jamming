let accessToken
const clientID = 'c8005f325c344b6f8599d36639d3045c'
const redirectURI = 'http://localhost:3000/'

const Spotify = {
    accessToken: '',
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
            const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}`
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
        if (jsonResponse) {
            const searchResults = jsonResponse.tracks.items.map((track) => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            })
            return searchResults
        }
        
        // console.log(searchResults)
        // const searchResults = jsonResponse.
    }
}


export default Spotify