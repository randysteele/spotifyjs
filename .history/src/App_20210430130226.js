import { useState, useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
// import { useDataLayerValue } from "./DataLayer";
import Body from "./Body.css"
import Sidebar from "./Sidebar.css"
import Footer from "./Footer.css"





const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState('')
  // const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(token, 'is my token');
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
