//react
import React, { useState } from "react";

//material ui
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//components
import ExploreSpeechList from "./ExploreSpeechList.js";
import ExploreSpeakerList from "./ExploreSpeakerList.js";
import ExploreCategoryList from "./ExploreCategoryList.js";

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

const Explore = () => {
  const [tabIdx, setIdx] = useState(0);
  const [filter, setFilter] = useState("");

  const handleTabChange = (event, tabIdx) => {
    setIdx(tabIdx);
    setFilter("");
  };

  const onSearchInputChange = e => {
    setFilter(e.target.value);
  };

  const filterSpeech = filter => {
    setFilter(filter);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar>
        <Tabs value={tabIdx} onChange={handleTabChange} centered>
          <Tab label="All" />
          <Tab label="Speaker" />
          <Tab label="Category" />
        </Tabs>
      </AppBar>

      {tabIdx === 0 && (
        <ExploreSpeechList
          filter={filter}
          onSearchInputChange={onSearchInputChange}
        />
      )}
      {tabIdx === 1 && (
        <ExploreSpeakerList filter={filter} filterSpeech={filterSpeech} />
      )}
      {tabIdx === 2 && (
        <ExploreCategoryList filter={filter} filterSpeech={filterSpeech} />
      )}
    </MuiThemeProvider>
  );
};

export default Explore;
