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
                <img src="data:image/png;base64,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" alt="" />
                <div className="body_info_text">
                    <strong> PLAYLIST</strong>
                    <h2>discover_weekly</h2>
                    <p>{discover_weekly?.description}</p>

                </div>
            </div>

        </div>
    );
}

export default Body;