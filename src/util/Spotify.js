const clientID = 'c8005f325c344b6f8599d36639d3045c'
const redirectURI = 'http://localhost:3000/'
let accessToken
let expiration

//test token string:  http://localhost:3000/?access_token=token123&expires_in=999999

const Spotify = {

    getAccessToken () {
        if (accessToken) {
            return accessToken
        }

        const token = window.location.href.match(/access_token=([^&]*)/)
        const expiresIn = window.location.href.match(/expires_in=([^&]*)/)
        if (token && expiresIn) {
            accessToken = token[1]
            expiration = expiresIn[1]
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            console.log(`Token: ${accessToken} Expiration: ${expiration}`)
        } else {
            const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}`
            window.location = url
        }
    },
    async search() {
        this.getAccessToken()
    }
}


export default Spotify