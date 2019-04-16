import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
import { playPause, onNext } from "../actions.js";

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
    MuiBottomNavigationAction: {
      root: {
        color: "#fff",
        padding: 0
      }
    }
  },
  typography: { useNextVariants: true }
});

const styles = {
  appBar: {
    position: "fixed",
    top: "auto",
    bottom: 0
  },
  toolBar: {
    background: "RGB(203,125,64)",
    display: "grid",
    gridTemplateColumns: "auto 12% 10% 10%"
  },
  navContainer: {
    background: "RGB(202,187,143)"
  }
};

class BottomBar extends Component {
  render() {
    const { classes, speaker, title, playing, playPause, onNext } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Link to="/text">
            {
              <span>
                {title}
                <br />
                <em>{speaker}</em>
              </span>
            }
          </Link>
          <Link to="/playlist">
            <ListIcon />
          </Link>
          <IconButton onClick={playPause}>
            {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
          </IconButton>
          <IconButton onClick={onNext}>
            <SkipNextIcon />
          </IconButton>
        </Toolbar>

        <MuiThemeProvider theme={theme}>
          <BottomNavigation className={classes.navContainer} showLabels>
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
        </MuiThemeProvider>
      </AppBar>
    );
  }
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(BottomBar)
);
