import React, { useEffect } from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { useDataLayerValue } from "./DataLayer"
import

    function Footer({ s }) {
        const [{ token, item, playing }, dispatch] = useDataLayerValue();
        useEffect(() => {
            s.getMyCurrentPlaybackState().then((r) => {
                console.log(r);

                dispatch({
                    type: "SET_PLAYING",
                    playing: r.is_playing,
                });

                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                });
            });
        }, [spotify]);

        const handlePlayPause = () => {
            if (playing) {
                spotify.pause();
                dispatch({
                    type: "SET_PLAYING",
                    playing: false,
                });
            } else {
                spotify.play();
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                });
            }
        };

        const skipNext = () => {
            spotify.skipToNext();
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                });
            });
        };

        const skipPrevious = () => {
            spotify.skipToPrevious();
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                });
            });
        };

        return (
            <div className="footer">
                <div className="footer_left">
                    <img className="footer_albumlogo" src={item?.album.images[0].url} alt="" />
                    <div className="footer_songinfo">
                        <h4>{item?.name}</h4>
                        <p>{item?.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                </div>

                <div className="footer_center">
                    <ShuffleIcon className="footer_green" />
                    <SkipPreviousIcon onClick={skipNext} className="footer_icon" />
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer_icon"
                    />
                    <PlayCircleOutlineIcon fontSize="large" className="footer_icon" onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon" />
                    <SkipNextIcon onClick={skipPrevious} className="footer_icon" />
                    <RepeatIcon className="footer_green" />

                </div>
                <div className="footer_right" >
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon />
                        </Grid>
                        <Grid item>
                            <VolumeDownIcon />
                        </Grid>
                        <Grid item xs>
                            <Slider />
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }


export default Footer;