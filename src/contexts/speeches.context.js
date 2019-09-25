import React, { createContext, useEffect, useState } from "react";
import {
  firestore,
  convertSpeechesSnapshotToMap
} from "../utils/firebase.utils.js";

export const SpeechesContext = createContext();

const SpeechesContextProvider = ({ children }) => {
  const [speeches, setSpeeches] = useState();

  useEffect(() => {
    const collectionRef = firestore.collection("speeches");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertSpeechesSnapshotToMap(snapshot);
      setSpeeches(collectionsMap);
    });
    return () => unsubscribeFromSnapshot(); // garbage collection
  }, []);

  return (
    <SpeechesContext.Provider value={{ speeches }}>
      {children}
    </SpeechesContext.Provider>
  );
};

export default SpeechesContextProvider;
