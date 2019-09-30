import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQjBFO6nuQe_Em9KDdgpacji3ZJ9C8sUM",
  authDomain: "speech-pwa.firebaseapp.com",
  databaseURL: "https://speech-pwa.firebaseio.com",
  projectId: "speech-pwa",
  storageBucket: "speech-pwa.appspot.com",
  messagingSenderId: "129800811948",
  appId: "1:129800811948:web:4ee380a6bcd2b2dbb53609"
};

firebase.initializeApp(firebaseConfig);

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
    const { audioFileName, title, date, speakerId } = doc.data();
    return {
      id: doc.id,
      audioFileName,
      title,
      date: date.toDate(),
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

export const firestore = firebase.firestore();

export const storage = firebase.storage();

// use audio file name to get corresponding url from storage
export const getAudioRefFromStorage = async audioFileName => {
  const storageRef = storage.ref();
  return await storageRef.child(audioFileName).getDownloadURL();
};

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
