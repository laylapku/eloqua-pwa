import React, { Component } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import SettingsAboutTab from "./SettingsAboutTab.js";

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

class Settings extends Component {
  state = {
    tabIdx: 0
  };

  handleTabChange = (event, tabIdx) => {
    this.setState({ tabIdx });
  };

  render() {
    const { tabIdx } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Tabs
          value={tabIdx}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="General" />
          <Tab label="About" />
        </Tabs>
        {tabIdx === 0 && <p />}
        {tabIdx === 1 && <SettingsAboutTab />}
      </MuiThemeProvider>
    );
  }
}

export default Settings;
