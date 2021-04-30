import React, { Component } from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />


                <SidebarOption title="Home" />
                <SidebarOption title="Search" />
                <SidebarOption title="Your Library" />
            </div>
        );
    }
}

export default Sidebar;