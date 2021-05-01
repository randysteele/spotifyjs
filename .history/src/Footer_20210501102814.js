import React, { Component } from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from '@material-ui/icons/Repeat';
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
                    <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                </div>
                <div className="footer_right">


                </div>
            </div>

        );
    }
}

export default Footer;