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
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { playPause } from "../actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause())
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
    justifyContent: "space-between"
  },
  navContainer: {
    background: "RGB(202,187,143)"
  }
};

class BottomBar extends Component {
  render() {
    const { classes, speaker, title, playing, playPause } = this.props;

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
          <IconButton onClick={playPause}>
            {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
          </IconButton>
        </Toolbar>

        <MuiThemeProvider theme={theme}>
          <BottomNavigation className={classes.navContainer} showLabels>
            <BottomNavigationAction
              component={Link}
              to="/"
              label="Today"
              icon={<CalendarTodayIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/search"
              label="Explore"
              icon={<SearchIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/favorites"
              label="Favorites"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/account"
              label="Account"
              icon={<PersonPinIcon />}
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
