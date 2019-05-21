import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { playPause, onNext } from "../redux/actions.js";

import Slider from "@material-ui/lab/Slider";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import speakers from "../data/speakers";
import speeches from "../data/speeches";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause()),
    onNext: () => dispatch(onNext())
  };
};

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
    MuiAppBar: {
      positionFixed: {
        bottom: 0,
        top: "auto"
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
    },
    MuiBottomNavigation: {
      root: {
        background: "#F4F4F4",
        height: "48px"
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: "RGB(111,134,131)",
        "&$selected": {
          color: "RGB(203,125,64)"
        }
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

class BottomBar extends Component {
  render() {
    const {
      playing,
      played,
      playlist,
      index,
      playPause,
      onNext,
      location: { pathname }
    } = this.props;
    const speechPlaying = speeches.find(ele => ele.id === playlist[index]);
    const speakerName = speakers[speechPlaying.speakerId].name;
    const useMarquee = () => {
      const titleLength = speechPlaying.title.split("").length;
      return titleLength > 27 ? "marquee" : null;
    };

    return (
      <MuiThemeProvider theme={theme}>
        {pathname !== "/settings" && pathname !== "/text" && (
          <AppBar>
            <Slider value={played} max={1} />
            <Toolbar>
              <Link to="/text">
                {
                  <div className={useMarquee()}>
                    <span>{speechPlaying.title}</span>
                    <br />
                    <em className="speaker">{speakerName}</em>
                  </div>
                }
              </Link>
              <IconButton component={Link} to="/playlist">
                <ListIcon />
              </IconButton>
              <IconButton onClick={playPause}>
                {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
              </IconButton>
              <IconButton onClick={onNext}>
                <SkipNextIcon />
              </IconButton>
            </Toolbar>

            <BottomNavigation showLabels value={setRouteIndex(pathname)}>
              <BottomNavigationAction
                component={Link}
                to="/"
                label="Explore"
                icon={<ExploreIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/favorites"
                label="Favorites"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/settings"
                label="Settings"
                icon={<SettingsIcon />}
              />
            </BottomNavigation>
          </AppBar>
        )}
      </MuiThemeProvider>
    );
  }
}

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(BottomBar)
);

function setRouteIndex(pathname) {
  switch (pathname) {
    case "/":
    
      return 0;
    case "/favorites":
      return 1;
    case "/settings":
      return 2;
    default:
      return -1;
  }
}
