import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input
                    placeholder="Search for Artist, Songs, or Podcasts"
                    type="text" />

            </div>
            <div className="header_right">

            </div>

        </div>
    );
};

export default Header;