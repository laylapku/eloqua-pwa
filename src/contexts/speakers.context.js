import React, { createContext, useEffect, useState } from "react";
import {
  firestore,
  convertSpeakersSnapshotToMap
} from "../utils/firebase.utils.js";

export const SpeakersContext = createContext();

const SpeakersContextProvider = ({ children }) => {
  const [speakers, setSpeakers] = useState();

  useEffect(() => {
    const collectionRef = firestore.collection("speakers");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertSpeakersSnapshotToMap(snapshot);
      setSpeakers(collectionsMap);
    });
    return () => unsubscribeFromSnapshot(); // garbage collection
  }, []);

  return (
    <SpeakersContext.Provider value={{ speakers }}>
      {children}
    </SpeakersContext.Provider>
  );
};

export default SpeakersContextProvider;
