import React from 'react';
import "./Body.css";
import Header from "./Header"

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src="" alt="" />
                <div className="body_info_text">

                </div>
            </div>

        </div>
    );
}

export default Body;