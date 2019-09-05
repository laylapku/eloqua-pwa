//react
import React, { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

//components
import TemplateList from "./TemplateList.js";

const PlayList = () => {
  const { player } = useContext(PlayerContext);
  const { playlist } = player;

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

export default PlayList;
