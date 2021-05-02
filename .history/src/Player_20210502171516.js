import React from 'react';
import Footer from "./Footer"
import "./Player.css";
import Sidebar from "./Sidebar"
import Body from "./Body"

function Player({ spotify, token }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify} token={token} />
            </div>

            <Footer spotify={spotify} token={token} />

        </div>
    );
}



export default Player;