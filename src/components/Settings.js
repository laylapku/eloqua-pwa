import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "./About.js";
import BottomBar from "./BottomBar.js";

const theme = createMuiTheme({
  overrides: {
    MuiTabs: {
      indicator: {
        display: "none"
      }
    },
    MuiTab: {
      root: {
        minHeight: "35px",
        borderRadius: "5px"
      },
      textColorPrimary: {
        boxShadow: "3px 3px 10px RGB(192,178,131,0.6)",
        "&$selected": {
          background: "RGB(203,125,64,0.6)",
          color: "#fff"
        }
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = () => ({});

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
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
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
        {value === 0 && <BottomBar />}
        {value === 1 && <About />}
      </MuiThemeProvider>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Settings);
