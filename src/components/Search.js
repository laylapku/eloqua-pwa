import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import SpeechList from "./Speech/SpeechList.js";
import SpeakerList from "./Speech/SpeakerList.js";
import ThemeList from "./Speech/ThemeList.js";
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
    tabValue: 0,
    filter: ""
  };

  handleTabChange = (event, value) => {
    this.setState({ tabValue: value });
  };

  handleTabChangeIndex = index => {
    this.setState({ tabValue: index });
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterSpeech = value => {
    this.setState({ filter: value, tabValue: 0 });
  };

  render() {
    const { classes, theme } = this.props;
    const { tabValue, filter} = this.state;

    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            className={classes.input}
            placeholder="Find speaker or speech"
            inputProps={{
              "aria-label": "Description"
            }}
            onChange={this.handleInputChange}
          />
          <IconButton onClick={() => this.filterSpeech(filter)}> 
            <SearchIcon />
          </IconButton>
        </div>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={tabValue}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="All" />
            <Tab label="Speaker" />
            <Tab label="Theme" />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          slideStyle={{ overflow: "visible" }}
          index={tabValue}
          onChangeIndex={this.handleTabChangeIndex}
        >
          <SpeechList dir={theme.direction} filter={filter} />
          <SpeakerList dir={theme.direction} filterSpeech={this.filterSpeech} />
          <ThemeList dir={theme.direction} filterSpeech={this.filterSpeech} />
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
