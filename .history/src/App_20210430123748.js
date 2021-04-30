import { useState, useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";



const spotify = new SpotifyWebApi();

function App() {
  const [user, token] = useState(null)
  // const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      })
    }
  }, []);


  return (
    <div className="app">{token ?
      <Player spotify={spotify} />
      : <Login />
    } </div>
  );
}

export default App;