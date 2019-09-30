// react
import React, { Fragment, useContext } from "react";
import { SpeakersContext } from "../contexts/speakers.context";
import { SpeechesContext } from "../contexts/speeches.context";
import { SpeechCategoryContext } from "../contexts/speech_category.context";

// material ui
import { CircularProgress } from "@material-ui/core";

// components
import SpeechListItem from "./SpeechListItem.js";

const ExploreFilteredList = ({
  speakerFilter,
  categoryFilter,
  inputFilter
}) => {
  const { speakers } = useContext(SpeakersContext);
  const { speeches } = useContext(SpeechesContext);
  const { speech_category } = useContext(SpeechCategoryContext);

  return (
    <Fragment>
      {speeches && speakers && speech_category ? (
        Object.values(speeches)
          .filter(speech => {
            return (
              //filter by speaker
              (speakerFilter && speech.speakerId === speakerFilter) ||
              //filter by category
              (categoryFilter &&
                speech_category
                  .filter(item => item.categoryId === categoryFilter)
                  .some(item => item.speechId === speech.id) === true) ||
              //filter by input: speech title, speaker name
              ((inputFilter &&
                (speech.title
                  .toLowerCase()
                  .includes(inputFilter.toLowerCase()) ||
                  speakers[speech.speakerId].name
                    .toLowerCase()
                    .includes(inputFilter.toLowerCase()))) ||
                //keep all speeches if inputFilter is empty for SpeechList
                inputFilter === "")
            );
          })
          .map(speech => {
            return (
              <SpeechListItem
                key={speech.id}
                speech={speech}
                speakerName={speakers[speech.speakerId].name}
              />
            );
          })
      ) : (
        <CircularProgress />
      )}
    </Fragment>
  );
};

export default ExploreFilteredList;
