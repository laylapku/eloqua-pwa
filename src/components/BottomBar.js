import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import speeches from "../data/speeches";
import speakers from "../data/speakers";
import { playPause, onNext } from "../redux/actions.js";

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
    MuiToolbar: {
      gutters: {
        paddingRight: 0
      }
    },
    MuiIconButton: {
      root: {
        color: "inherit"
      }
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: "#F4F4F4"
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

const styles = {
  appBar: {
    position: "fixed",
    top: "auto",
    bottom: 0
  },
  toolBar: {
    display: "grid",
    gridTemplateColumns: "auto 20% 12% 12%",
    background: "RGB(202,187,143)"
  }
};

class BottomBar extends Component {
  render() {
    const {
      classes,
      id,
      playing,
      playPause,
      onNext,
      location: { pathname }
    } = this.props;
    const speechSelected = speeches.find(ele => ele.id === id);
    const speaker = speakers[speechSelected.speakerId].name;

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Link to="/text">
              {
                <span>
                  {speechSelected.title}
                  <br />
                  <em className="speaker">{speaker}</em>
                </span>
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
      </MuiThemeProvider>
    );
  }
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStatetoProps,
      mapDispatchToProps
    )(BottomBar)
  )
);

function setRouteIndex(pathname) {
  switch (pathname) {
    case "/favorites":
      return 1;
    case "/settings":
      return 2;
    default:
      return 0;
  }
}
