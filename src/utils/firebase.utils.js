import * as firebase from "firebase/app";
import "firebase/firestore";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDQjBFO6nuQe_Em9KDdgpacji3ZJ9C8sUM",
  authDomain: "speech-pwa.firebaseapp.com",
  databaseURL: "https://speech-pwa.firebaseio.com",
  projectId: "speech-pwa",
  storageBucket: "speech-pwa.appspot.com",
  messagingSenderId: "129800811948",
  appId: "1:129800811948:web:4ee380a6bcd2b2dbb53609"
};

// write data to firestore
/* export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
}; */

// get data from firestore collections
export const convertCategoriesSnapshotToMap = collection => {
  const transformedCollection = collection.docs.map(doc => {
    const { name, icon } = doc.data();
    return {
      id: doc.id,
      name,
      icon
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

export const convertSpeakersSnapshotToMap = collection => {
  const transformedCollection = collection.docs.map(doc => {
    const { name, img } = doc.data();
    return {
      id: doc.id,
      name,
      img
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

export const convertSpeechesSnapshotToMap = collection => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, date, url, speakerId } = doc.data();
    return {
      id: doc.id,
      title,
      date: date.toDate(),
      url,
      speakerId
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

export const convertSpeechCategorySnapshotToMap = collection => {
  return collection.docs.map(doc => {
    const { speechId, categoryId } = doc.data();
    return {
      speechId,
      categoryId
    };
  });
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const firestore = firebase.firestore();

// persist firestore to local storage
firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

export default firebase;
