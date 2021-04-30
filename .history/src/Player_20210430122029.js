import React from 'react';
import "./Player.css";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />


            </div>
        </div>
    );
}



export default Player;