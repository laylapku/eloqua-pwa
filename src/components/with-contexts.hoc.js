import React from "react";
import CategoriesContextProvider from "../contexts/categories.context";
import SpeakersContextProvider from "../contexts/speakers.context";
import SpeechesContextProvider from "../contexts/speeches.context";
import SpeechCategoryContextProvider from "../contexts/speech_category.context";
import PlayerContextProvider from "../contexts/player/player.context";

const withContexts = WrappedComponent => {
  return props => {
    return (
      <CategoriesContextProvider>
        <SpeakersContextProvider>
          <SpeechesContextProvider>
            <SpeechCategoryContextProvider>
              <PlayerContextProvider>
                <WrappedComponent {...props} />
              </PlayerContextProvider>
            </SpeechCategoryContextProvider>
          </SpeechesContextProvider>
        </SpeakersContextProvider>
      </CategoriesContextProvider>
    );
  };
};

export default withContexts;
