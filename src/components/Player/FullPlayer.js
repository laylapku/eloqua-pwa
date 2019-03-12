import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Duration from "./Duration.js";
import SpeechText from "../Speech/SpeechText";
/* import speechData from "../Speech/speechData"; */

const styles = theme => ({
  playercontainer: {
    width: "100%"
  }
});

/* const urls = speechData.map(item => item.url);
const randomUrl = urls[Math.floor(Math.random()*urls.length)]; */

const DetailedPlayer = props => {
  const {
    classes,
    url,
    playing,
    played,
    loaded,
    volume,
    duration,
    playPause,
    toggleLoop,
    onSeekMouseDown,
    onSeekChange,
    onSeekMouseUp,
    toggleMuted,
    setVolume,
    setPlaybackRate
  } = props;

  return (
    <div className={classes.playercontainer}>
      <SpeechText url={url} />
      <div>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onMouseDown={onSeekMouseDown}
          onChange={onSeekChange}
          onMouseUp={onSeekMouseUp}
        />
        <progress max={1} value={loaded} />
        <Duration seconds={duration * played} />/<Duration seconds={duration} />
      </div>

      <div>
        <button onClick={playPause}>{playing ? "Pause" : "Play"}</button>
        <button>Previous</button>
        <button>Next</button>
        <button onClick={toggleLoop}>Loop</button>
        <button onClick={setPlaybackRate} value={1}>
          1x
        </button>
        <button onClick={setPlaybackRate} value={1.5}>
          1.5x
        </button>
        <button onClick={toggleMuted}>Mute</button>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={setVolume}
        />
      </div>
    </div>
  );
};

DetailedPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedPlayer);
