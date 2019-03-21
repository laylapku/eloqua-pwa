import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import FullPlayer from "./Player/FullPlayer.js";
import SpeechList from "./Speech/SpeechList.js";
import { playPause } from "../actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause())
  };
};

const styles = theme => ({
  appBar: {
    background: "RGB(111,77,57)",
    position: "fixed",
    top: "auto",
    bottom: 0
  },
  sliderContainer: {
    padding: "0 8px"
  },
  sliderThumb: {
    height: "0px",
    width: "0px"
  },
  tabsIndicator: {
    display: "none"
  },
  tabRoot: {
    maxWidth: "100%",
    textTransform: "none",
    textAlign: "left"
  }
});

class BottomTabs extends Component {
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

    return (
      <div>
        {this.state.tabValue === 0 && (
          <AppBar classes={{ root: classes.appBar }}>
            <Tabs
              classes={{ indicator: classes.tabsIndicator }}
              value={this.state.tabValue}
              onChange={this.handleTabChange}
            >
              <Tab
                onClick={playPause}
                label={
                  playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />
                }
              />
              <Tab
                classes={{ root: classes.tabRoot }}
                label={
                  <span>
                    {title}
                    <br />
                    {speaker}
                  </span>
                }
              />
            </Tabs>
          </AppBar>
        )}

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          slideStyle={{ overflow: "visible" }}
          index={this.state.tabValue}
          onChangeIndex={this.handleTabChangeIndex}
        >
          <SpeechList dir={theme.direction} />
          <FullPlayer
            dir={theme.direction}
            handleTabChangeIndex={this.handleTabChangeIndex}
          />
        </SwipeableViews>
      </div>
    );
  }
}

BottomTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(BottomTabs)
);
