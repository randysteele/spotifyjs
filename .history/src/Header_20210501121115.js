import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from "./DataLayer"

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input
                    placeholder="Search for Artist, Songs, or Podcasts"
                    type="text" />

            </div>
            <div className="header_right">
                <h4>{user?.display_name}</h4>
                <Avatar src="" alt="RQ" />

            </div>

        </div>
    );
};

export default Header;