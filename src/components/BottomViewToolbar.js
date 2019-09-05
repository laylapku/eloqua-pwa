//react
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import { PLAY_PAUSE, ON_NEXT } from "../reducers/constants";

//material ui
import Slider from "@material-ui/core/Slider";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";

//data
import speakers from "../data/speakers";
import speeches from "../data/speeches";

const theme = createMuiTheme({
  overrides: {
    MuiSlider: {
      track: {
        backgroundColor: "RGB(111,134,131)"
      },
      thumb: {
        height: 0
      }
    },
    MuiToolbar: {
      gutters: {
        display: "grid",
        gridTemplateColumns: "auto 16% 10% 10%",
        background: "RGB(202,187,143)",
        paddingLeft: "10px",
        paddingRight: 0
      },
      regular: {
        minHeight: "48px"
      }
    },
    MuiIconButton: {
      root: {
        color: "inherit"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const BottomViewToolbar = () => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, played, playlist, index } = player;

  const speechPlaying = speeches.find(ele => ele.id === playlist[index]);
  const speakerName = speakers[speechPlaying.speakerId].name;
  const titleMarquee = () => {
    const titleLength = speechPlaying.title.split("").length;
    return titleLength > 27 ? "marquee" : null;
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Slider value={played * 100} max={100} />
      <Toolbar>
        <Link to="/text">
          {
            <div className={titleMarquee()}>
              <span>{speechPlaying.title}</span>
              <br />
              <em className="speaker">{speakerName}</em>
            </div>
          }
        </Link>
        <IconButton component={Link} to="/playlist">
          <ListIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            dispatch({ type: PLAY_PAUSE });
          }}
        >
          {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
        </IconButton>
        <IconButton onClick={() => dispatch({ type: ON_NEXT })}>
          <SkipNextIcon />
        </IconButton>
      </Toolbar>
    </MuiThemeProvider>
  );
};

export default BottomViewToolbar;
