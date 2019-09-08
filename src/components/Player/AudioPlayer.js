// react
import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  useRef
} from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../contexts/PlayerContext";
import {
  ON_DURATION,
  UPDATE_PLAYED,
  PLAY_PAUSE,
  ON_PREV,
  ON_NEXT,
  TOGGLE_LOOP,
  SET_PLAYBACK_RATE,
  TOGGLE_ADD_TO_FAVLIST
} from "../../reducers/constants";

//libs
import ReactPlayer from "react-player";

// material ui
import {
  Slider,
  Container,
  Dialog,
  DialogContent,
  IconButton
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import LoopIcon from "@material-ui/icons/Loop";
import ListIcon from "@material-ui/icons/List";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

// components
import Duration from "./Duration";

// data
import speeches from "../../data/speeches";

//styles
import useStyles from "../../styles/customizedStyles";

const AudioPlayer = props => {
  const { player, dispatch } = useContext(PlayerContext);
  const {
    playing,
    played,
    loop,
    playbackRate,
    duration,
    playlist,
    index,
    favlist
  } = player;

  //get new url when component updates
  const [url, setUrl] = useState(
    speeches.find(ele => ele.id === playlist[index]).url
  );
  useEffect(() => {
    const speechToPlay = speeches.find(ele => ele.id === playlist[index]);
    setUrl(speechToPlay.url);
    //updateMetadata();
  }, [playlist, index]);

  const [seeking, setSeeking] = useState(false);
  // workaround for react-player onProgress compatible issue with react hooks
  const seekingRef = useRef(null);
  const playerRef = useRef(null);
  useEffect(() => {
    seekingRef.current = seeking;
  }, [seeking]);
  // check out this react-player issue: https://github.com/CookPete/react-player/issues/511
  // and more importantly this react issue: https://github.com/facebook/react/issues/14031
  // also react documentation: https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback

  // seek methods for player slider
  const onSeekEnd = (e, value) => {
    playerRef.current.seekTo(parseFloat(value / 100)); //ref fix
    setSeeking(false);
  };
  const onSliderClick = (e, value) => {
    setSeeking(true);
    dispatch({ type: "UPDATE_PLAYED", payload: parseFloat(value / 100) });
  };

  //switch play speed
  const [speed, setSpeed] = useState(1);
  const [open, setOpen] = useState(false);
  const handleSpeedChange = e => {
    setSpeed(e.target.value);
    setOpen(false);
    dispatch({
      type: SET_PLAYBACK_RATE,
      payload: parseFloat(e.target.value)
    });
  };

  const { noDisplay } = props;
  const speechPlaying = speeches.find(item => item.id === playlist[index]);
  const classes = useStyles();

  return (
    <Fragment>
      <ReactPlayer
        ref={playerRef} // for seekTo method
        height="0px" // required
        url={url}
        playing={playing}
        played={played}
        loop={loop}
        playbackRate={playbackRate}
        onEnded={() => dispatch({ type: ON_NEXT })}
        onDuration={payload => dispatch({ type: ON_DURATION, payload })} // updates audio duration
        onProgress={status =>
          !seekingRef.current &&
          dispatch({ type: UPDATE_PLAYED, payload: status.played })
        } // update ui values with values from player
      />

      {!noDisplay && (
        <Container className={classes.controlsContainer}>
          <Slider
            value={played * 100}
            onChange={onSliderClick}
            onChangeCommitted={onSeekEnd}
          />
          <div className={classes.duration}>
            <Duration seconds={duration * played} />/
            <Duration seconds={duration} />
          </div>

          <Container className={classes.controlsFlex}>
            <IconButton onClick={() => dispatch({ type: TOGGLE_LOOP })}>
              {loop ? <RepeatOneIcon /> : <LoopIcon />}
            </IconButton>
            <IconButton onClick={() => dispatch({ type: ON_PREV })}>
              <SkipPreviousIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch({ type: PLAY_PAUSE });
              }}
            >
              {playing ? (
                <PauseCircleOutlineIcon className={classes.playPauseIcon} />
              ) : (
                <PlayCircleOutlineIcon className={classes.playPauseIcon} />
              )}
            </IconButton>
            <IconButton onClick={() => dispatch({ type: ON_NEXT })}>
              <SkipNextIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                dispatch({
                  type: TOGGLE_ADD_TO_FAVLIST,
                  payload: [speechPlaying.id]
                })
              }
            >
              {favlist.indexOf(speechPlaying.id) !== -1 ? (
                <FavoriteIcon classes={{ root: classes.favIcon }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>

            <IconButton
              onClick={() => {
                setOpen(true);
              }}
            >
              <span className={classes.speedBtn}>{speed + "x"}</span>
            </IconButton>
            <Dialog open={open} aria-labelledby="speed-dialog">
              <DialogContent
                value={speed}
                onClick={handleSpeedChange}
                classes={{ root: classes.speedDialog }}
              >
                <option value={0.75}>0.75x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </DialogContent>
            </Dialog>
            <IconButton component={Link} to="/playlist">
              <ListIcon />
            </IconButton>
          </Container>
        </Container>
      )}
    </Fragment>
  );
};

export default AudioPlayer;
