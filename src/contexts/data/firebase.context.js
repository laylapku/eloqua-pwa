import React, { createContext, useEffect, useState } from "react";
import {
  firestore,
  convertSpeakersSnapshotToMap,
  convertCategoriesSnapshotToMap,
  convertSpeechesSnapshotToMap
} from "../../utils/firebase.utils.js";

export const FirebaseContext = createContext();

const FirebaseContextProvider = props => {
  const [speeches, setSpeeches] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const collectionRef = firestore.collection("speakers");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertSpeakersSnapshotToMap(snapshot);
      setSpeakers(collectionsMap);
    });
    return () => unsubscribeFromSnapshot(); // garbage collection
  }, []);

  useEffect(() => {
    const collectionRef = firestore.collection("categories");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCategoriesSnapshotToMap(snapshot);
      setCategories(collectionsMap);
    });
    return () => unsubscribeFromSnapshot(); // garbage collection
  }, []);

  useEffect(() => {
    const collectionRef = firestore.collection("speeches");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertSpeechesSnapshotToMap(snapshot);
      setSpeeches(collectionsMap);
    });
    return () => unsubscribeFromSnapshot(); // garbage collection
  }, []);

  console.log(speeches, categories, speakers);
  return (
    <FirebaseContext.Provider value={{ speeches, speakers, categories }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
