//react
import React, { Fragment } from "react";

//components
import TemplateList from "./TemplateList.js";

//data
import speeches from "../data/speeches";
import speakers from "../data/speakers";

const ExploreFilteredList = ({
  speakerFilter,
  categoryFilter,
  inputFilter
}) => {
  return (
    <Fragment>
      {speeches
        .filter(
          ele =>
            (speakerFilter && ele.speakerId === speakerFilter) || //by speaker
            (categoryFilter && ele.category.includes(categoryFilter)) || //by category
            ((inputFilter &&
              //by filtering speech title
              (ele.title.toLowerCase().includes(inputFilter.toLowerCase()) ||
                //by filtering speaker name
                speakers[ele.speakerId].name
                  .toLowerCase()
                  .includes(inputFilter.toLowerCase()))) ||
              //keep all speeches if inputFilter is empty for SpeechList
              inputFilter === "")
        )
        .map((ele, index) => {
          return (
            <TemplateList
              key={"filteredListSpeech-" + index}
              id={ele.id}
              noPlay={true}
            />
          );
        })}
    </Fragment>
  );
};

export default ExploreFilteredList;
