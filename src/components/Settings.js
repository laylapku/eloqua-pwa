//react
import React, { useState } from "react";

//material ui
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//data
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

const Settings = () => {
  const [tabIdx, setIdx] = useState(0);

  const handleTabChange = (event, tabIdx) => {
    setIdx(tabIdx);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Tabs
        value={tabIdx}
        onChange={handleTabChange}
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
};

export default Settings;
