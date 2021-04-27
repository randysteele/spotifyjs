import { useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './'
function App() {
  useEffect(() => {
    const token = getTokenFromUrl

  }, []);

  return (
    <div className="app">
      <h3> Welcome to my Spotify Clone</h3>
      <Login />

    </div>
  );
}

export default App;
