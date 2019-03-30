import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import SpeechList from "./Speech/SpeechList.js";
import SpeechText from "./Speech/SpeechText.js";
import { playPause } from "../actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause())
  };
};

const styles = {
  appBar: {
    background: "RGB(202,187,143)",
    position: "fixed",
    top: "auto",
    bottom: 0
  },
  toolBar: {
    background: "RGB(203,125,64)",
    justifyContent: "space-between"
  },
  tabsContainer: {
    justifyContent: "space-between"
  },
  tabsIndicator: {
    display: "none"
  },
  /* tabRoot: {
    maxWidth: "100%",
    textTransform: "none",
    textAlign: "left"
  } */
};

class BottomBars extends Component {
  state = {
    tabValue: 0
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleTabChangeIndex = index => {
    this.setState({ tabValue: index });
  };

  render() {
    const { classes, theme, speaker, title, playing, playPause } = this.props;
    const { tabValue } = this.state;

    return (
      <React.Fragment>
        {tabValue !== 4 && (
          <AppBar classes={{ root: classes.appBar }}>
            <Toolbar className={classes.toolBar}>
              {
                <span onClick={()=> this.handleTabChange(null, 4)}>
                  {title}
                  <br />
                  <em>{speaker}</em>
                </span>
              }
              <IconButton onClick={playPause}>
                {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
              </IconButton>
            </Toolbar>
            <Tabs
              classes={{ flexContainer: classes.tabsContainer, indicator: classes.tabsIndicator }}
              value={tabValue}
              onChange={this.handleTabChange}
            >
              <Tab label="Today" icon={<CalendarTodayIcon />} />
              <Tab label="Explore" icon={<SearchIcon />} />
              <Tab label="Favorites" icon={<FavoriteIcon />} />
              <Tab label="Account" icon={<PersonPinIcon />} />
            </Tabs>
          </AppBar>
        )}

        <SwipeableViews
          //animateHeight
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          slideStyle={{ overflow: "hidden" }}
          index={tabValue}
          onChangeIndex={this.handleTabChangeIndex}
        >
          <p>daily recommendation</p>
          <SpeechList dir={theme.direction} />
          <p>favorites</p>
          <p>sign in</p>
          <SpeechText
            dir={theme.direction}
            handleTabChangeIndex={this.handleTabChangeIndex}
          />
        </SwipeableViews>
      </React.Fragment>
    );
  }
}

BottomBars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(BottomBars)
);
