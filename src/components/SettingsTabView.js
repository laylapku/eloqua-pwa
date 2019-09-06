//react
import React, { Fragment, useState } from "react";

//material ui
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//data
import SettingsAboutTab from "./SettingsAboutTab.js";

const SettingsTabView = () => {
  const [tabIdx, setIdx] = useState(0);

  const handleTabChange = (event, tabIdx) => {
    setIdx(tabIdx);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default SettingsTabView;
