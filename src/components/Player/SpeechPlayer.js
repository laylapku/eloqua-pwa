import React from "react";
import queryString from "query-string";
import speechData from "../Speech/speechData";
import SoundPlayer from "./SoundPlayer.js";

const SpeechPlayer = (props) => {
  const params = queryString.parse(props.location.search);

  return (
    <div>
      
      {speechData.map(
        (item, index) =>
          item.id === params.id && (
            <div key={index}>
            <SoundPlayer url={item.audio}/>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          )
      )}
    </div>
  );
};

export default SpeechPlayer;
