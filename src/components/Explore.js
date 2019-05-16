import React, { Component, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ExploreSpeechList from "./ExploreSpeechList.js";
import ExploreSpeakerList from "./ExploreSpeakerList.js";
import ExploreCategoryList from "./ExploreCategoryList.js";
import BottomBar from "./BottomBar.js";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#EDEAE0",
        color: "(0,0,0,0.8)"
      }
    },
    MuiTabs: {
      indicator: {
        display: "none"
      }
    },
    MuiTab: {
      root: {
        minHeight: "35px",
        marginTop: "8px",
        borderRadius: "5px"
      },
      textColorInherit: {
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

class Explore extends Component {
  state = {
    tabIdx: 0
  };

  handleTabChange = (event, tabIdx) => {
    this.setState({ tabIdx });
  };

  render() {
    const { tabIdx } = this.state;

    return (
      <Fragment>
        <MuiThemeProvider theme={theme}>
          <AppBar>
            <Tabs value={tabIdx} onChange={this.handleTabChange} centered>
              <Tab label="All" />
              <Tab label="Speaker" />
              <Tab label="Category" />
            </Tabs>
          </AppBar>
          {tabIdx === 0 && <ExploreSpeechList />}
          {tabIdx === 1 && <ExploreSpeakerList />}
          {tabIdx === 2 && <ExploreCategoryList />}
        </MuiThemeProvider>
        <BottomBar />
      </Fragment>
    );
  }
}

export default Explore;
