import firebase from "firebase";

const Config = firebase.initializeApp({
  apiKey: "AIzaSyBnvJWFMZ5NkNa95s1tJ-uvWno9pHm9Wjk",
  authDomain: "fir-new-30ed5.firebaseapp.com",
  projectId: "fir-new-30ed5",
  storageBucket: "fir-new-30ed5.appspot.com",
  messagingSenderId: "275084654919",
  appId: "1:275084654919:web:cc12c180f33e29d6be3462",
  measurementId: "G-92WPG2ESFN",
});

const database = Config.firestore();
const auth = Config.auth();
const storage = firebase.storage();

export { database, auth, storage };
