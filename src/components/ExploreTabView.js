//react
import React, { Fragment, useState } from "react";

//material ui
import { AppBar, Tabs, Tab } from "@material-ui/core";

//components
import ExploreSpeechList from "./ExploreSpeechList.js";
import ExploreSpeakerList from "./ExploreSpeakerList.js";
import ExploreCategoryList from "./ExploreCategoryList.js";

const ExploreTabView = () => {
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
    <Fragment>
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
    </Fragment>
  );
};

export default ExploreTabView;
