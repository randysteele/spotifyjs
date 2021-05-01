import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from "./DataLayer"
import { initialState } from "./reducer"



function Sidebar() {
    const [{ playlists }] = useDataLayerValue();
    console.log(playlists.items)

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />


            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {/* <SidebarOption title="Country" /> */}

            {playlists?.items?.map((playlist) => (
                <SidebarOption option={playlist.items.name} />
            ))}

        </div>
    );
}


export default Sidebar;