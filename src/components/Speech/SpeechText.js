import React from "react";
import speechData from "./speechData";

const SpeechText = props => {
  const { url } = props;
  return (
    <div>
      {speechData.map(
        (item, index) =>
          item.url === url && (
            <div key={index}>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SpeechText;
