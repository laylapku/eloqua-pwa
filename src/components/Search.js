import React, { Component, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import SpeechList from "./Speech/SpeechList.js";
import SpeakerList from "./Speech/SpeakerList.js";
import CategoryList from "./Speech/CategoryList.js";
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

class Search extends Component {
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
          {tabIdx === 0 && <SpeechList />}
          {tabIdx === 1 && <SpeakerList />}
          {tabIdx === 2 && <CategoryList />}
        </MuiThemeProvider>
        <BottomBar />
      </Fragment>
    );
  }
}

export default Search;
