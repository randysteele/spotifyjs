import React, { Component } from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />


                <SidebarOption option="Home" />
                <SidebarOption option="Search" />
                <SidebarOption option="Your Library" />
            </div>
        );
    }
}

export default Sidebar;