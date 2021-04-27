import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify'
function App() {
  const [token, setToken] = useState(null);


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    console.log("I HAVE A TOKEN :point", token);
    const token = hash.access_token;

    if (token) {
      setToken(token)
    }
  }, []);

  return (
    <div className="app">
      <h3> Welcome to my Spotify Clone</h3>
      <Login />

    </div>
  );
}

export default App;
