import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AllSpeeches from "./Speech/AllSpeeches.js";
import Speakers from "./Speech/Speakers.js";
import Themes from "./Speech/Themes.js";
import BottomBar from "./BottomBar.js";

const styles = {
  root: {}
};

class Search extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { theme } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="All Speeches" />
            <Tab label="Speaker" />
            <Tab label="Theme" />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          slideStyle={{ overflow: "visible" }}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <AllSpeeches dir={theme.direction} />
          <Speakers dir={theme.direction} />
          <Themes dir={theme.direction} />
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
