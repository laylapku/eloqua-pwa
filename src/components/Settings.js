import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "./About.js";
import BottomBar from "./BottomBar.js";

const styles = () => ({
  appBar: {
    borderRadius: "3px"
  }
});

class Settings extends Component {
  state = {
    value: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ value: value });
  };

  handleTabChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <Tabs
          value={value}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="General" />
          <Tab label="About" />
        </Tabs>
        {value === 0 && <p>Item One</p>}
        {value === 1 && <About />}

        <BottomBar />
      </React.Fragment>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
