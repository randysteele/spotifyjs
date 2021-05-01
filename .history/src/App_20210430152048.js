import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import Login from "./Login";




const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState('')
  const [{ token }, dispatch] = useDataLayerValue();
  // const user = useDataLayerValue();
  // const dispatch = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(token, 'is my token');

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          })
        })
      })
    }
  }, []);

  console.log(token, 'is my token');
  return (
    <div className="app">{token ?
      <Player spotify={spotify} />
      : <Login />
    } </div>
  );
}

export default App;
