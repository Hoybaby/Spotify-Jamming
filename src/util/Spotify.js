// Will be using implicit grant flow which will return a user's access token in the url

const clientID=process.env.REACT_APP_CLIENT_ID;
const redirectUri = 'http://localhost:3000';

let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken
        }


        // check for access token match
        const accessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = windw.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            
            // we want to clear the parameters from the URL AFTER it expires. it helps prevent errors.
            window.setTimeout(() => accessToken ='', expiresIn * 1000);
            window.history.pushState('Access Toekn', null, '/');
            return accessToken
        }
    }
}

export default Spotify;