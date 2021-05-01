import React, { Component } from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons"
import SkipPreviousIcon from "@material-ui/icons"
import SkipNextIcon from "@material-ui/icons"
import ShuffleIcon from "@material-ui/icons"
import RepeatIcon from "@material-ui/icons"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_left">
                    <p>Album/song</p>

                </div>
                <div className="footer_center">
                    <ShuffleIcon className="footer_green" />
                </div>
                <div className="footer_right">


                </div>
            </div>

        );
    }
}

export default Footer;