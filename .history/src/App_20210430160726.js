import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import Login from "./Login";




const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue(DataLayer);

  useEffect(([{ token }, dispatch]) => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
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
