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

// write data to firebase
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const firestore = firebase.firestore();

export default firebase;
