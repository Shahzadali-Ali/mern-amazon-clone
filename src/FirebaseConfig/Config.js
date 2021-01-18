import firebase from "firebase";

const Config = firebase.initializeApp({
  apiKey: "AIzaSyB8aq6nJCWapuoCzn0tIP5r6TYnwFZTAxU",
  authDomain: "mern--clone-ad39b.firebaseapp.com",
  projectId: "mern--clone-ad39b",
  storageBucket: "mern--clone-ad39b.appspot.com",
  messagingSenderId: "1044560722431",
  appId: "1:1044560722431:web:11374870dd3bc74d394fca",
  measurementId: "G-W6TBRP7XJ1",
});

const database = Config.firestore();
const auth = Config.auth();
const storage = firebase.storage();

export { database, auth, storage };
