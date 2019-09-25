import React, { createContext, useEffect, useState } from "react";
import {
  firestore,
  convertCategoriesSnapshotToMap
} from "../utils/firebase.utils.js";

export const CategoriesContext = createContext();

const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const collectionRef = firestore.collection("categories");
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCategoriesSnapshotToMap(snapshot);
      setCategories(collectionsMap);
    });
    return () => unsubscribeFromSnapshot(); // garbage collection
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
