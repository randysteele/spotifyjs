import React, { Component } from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutlineIcon"
import SkipPreviousIcon from "@material-ui/icons/SkipPreviousIcon"
import SkipNextIcon from "@material-ui/icons/SkipNextIcon"
import ShuffleIcon from "@material-ui/icons/ShuffleIcon"
import RepeatIcon from "@material-ui/icons/RepeatIcon"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_left">
                    <p>Album/song</p>

                </div>
                <div className="footer_center">
                    <ShuffleIcon className="footer_green" />
                    <SkipPreviousIcon className="footer_icon" />
                    <SkipNextIcon className="footer_icon" />
                    <PlayCircleOutlineIcon className="" />
                </div>
                <div className="footer_right">


                </div>
            </div>

        );
    }
}

export default Footer;