import React, { createContext, useEffect, useState } from "react";
import {
  firestore,
  convertSpeechCategorySnapshotToMap
} from "../utils/firebase.utils.js";

export const SpeechCategoryContext = createContext();

const SpeechCategoryContextProvider = ({ children }) => {
  const [speech_category, setSpeechCategory] = useState([]);

  useEffect(() => {
    const collectionRef = firestore.collection("speech_category");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertSpeechCategorySnapshotToMap(snapshot);
      setSpeechCategory(collectionsMap);
    });
    return () => unsubscribeFromSnapshot(); // garbage collection
  }, []);

  return (
    <SpeechCategoryContext.Provider value={{ speech_category }}>
      {children}
    </SpeechCategoryContext.Provider>
  );
};

export default SpeechCategoryContextProvider;
