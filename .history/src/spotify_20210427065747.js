//takes the user to the login page 
export const authEndpoint = "https://accounts.spotify.com/authorize";
//redirects back to our app
const redirectUri = "http://localhost:3000/";
const clientId = "c54947b0c85c4c51a278eff55501985c"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-rad-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id={client_id}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;