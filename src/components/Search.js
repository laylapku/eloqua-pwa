import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SpeechList from "./Speech/SpeechList.js";
import SpeakerList from "./Speech/SpeakerList.js";
import CategoryList from "./Speech/CategoryList.js";
import BottomBar from "./BottomBar.js";

const styles = theme => ({
  appBar: {
    borderRadius: "3px"
  },
  input: {
    margin: theme.spacing.unit
  }
});

class Search extends Component {
  state = {
    value: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleTabChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="All" />
            <Tab label="Speaker" />
            <Tab label="Category" />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          slideStyle={{ overflow: "visible" }}
          index={value}
          onChangeIndex={this.handleTabChangeIndex}
        >
          <SpeechList dir={theme.direction} />
          <SpeakerList dir={theme.direction} />
          <CategoryList dir={theme.direction} />
        </SwipeableViews>

        <BottomBar />
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Search);
