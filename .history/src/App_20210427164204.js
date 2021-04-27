import { useEffect } from 'react';
import './App.css';
import Login from "./Login";

function App() {
  useEffect(() => {

  }, []);

  return (
    <div className="app">
      <h3> Welcome to my Spotify Clone</h3>
      <Login />

    </div>
  );
}

export default App;
