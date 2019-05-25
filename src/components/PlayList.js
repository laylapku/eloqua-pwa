import React from "react";

import { connect } from "react-redux";

import TemplateList from "./TemplateList.js";

const mapStateToProps = state => {
  return {
    playlist: state.playlist
  };
};

const PlayList = props => {
  const { playlist } = props;

  return (
    <div className="page-container">
      {playlist.map((ele, index) => {
        return (
          <TemplateList
            key={"playListSpeech-" + index}
            id={ele}
            speechIndex={index}
          />
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps)(PlayList);

