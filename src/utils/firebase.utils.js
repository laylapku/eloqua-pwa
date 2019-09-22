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

// get data from firestore
export const convertSpeakersSnapshotToMap = collection => {
  return collection.docs.map(doc => {
    const { name, img } = doc.data();
    return {
      id: doc.id,
      name,
      img
    };
  });
};

export const convertCategoriesSnapshotToMap = collection => {
  return collection.docs.map(doc => {
    const { name, icon } = doc.data();
    return {
      id: doc.id,
      name,
      icon
    };
  });
};

export const convertSpeechesSnapshotToMap = collection => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, date, url, speakerId } = doc.data();
    return {
      id: doc.id,
      title,
      date,
      url,
      speakerId
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const firestore = firebase.firestore();

export default firebase;
