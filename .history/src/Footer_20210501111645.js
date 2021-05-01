import React, { Component } from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_left">
                    <img className="footer_albumlogo" src="data:image/jpeg;base64,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" alt="" />
                    <div className="footer_songinfo">
                        <h4>Yeah</h4>
                        <p>Usher</p>
                    </div>
                </div>

                <div className="footer_center">
                    <ShuffleIcon className="footer_green" />
                    <SkipPreviousIcon className="footer_icon" />
                    <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                    <SkipNextIcon className="footer_icon" />

                </div>
                <div className="footer_right">
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon />
                        </Grid>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>


                </div>
            </div>

        );
    }
}

export default Footer;