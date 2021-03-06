import React from 'react';
import "./Body.css";
import Header from "./Header"
import { useDataLayerValue } from "./DataLayer"

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_info_text">
                    <strong> PLAYLIST</strong>
                    <h2>{discover_weekly}</h2>
                    <p>{discover_weekly?.description}</p>

                </div>
            </div>

        </div>
    );
}

export default Body;