import React, { Fragment } from "react";

import TemplateList from "./TemplateList.js";

import speeches from "../data/speeches";
import speakers from "../data/speakers";

const ExploreFilteredList = props => {
  const { speakerFilter, categoryFilter, inputFilter } = props;

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
              // keep all speeches if inputFilter is empty for SpeechList
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

/* <ListItem
              button
              key={"filteredListSpeech-" + index}
              onClick={() => {
                addToPlaylist({ id: ele.id });
              }}
              className="list-item"
            >
              <ListItemText
                primary={
                  <Typography>
                    {ele.title + "(" + year + ")"}
                    <br />
                    <em className="speaker">{speakerName}</em>
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => addToPlaylist({ id: ele.id, noPlay: true })} // just add to playlist, don't play
                >
                  <PlaylistAddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem> */
