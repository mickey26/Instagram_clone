import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuNT4u40tu7rZtIDXxzXbYqsTJQUqHDK8",
  authDomain: "instagram-clone-react-2418e.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-2418e-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-2418e",
  storageBucket: "instagram-clone-react-2418e.appspot.com",
  messagingSenderId: "672703036063",
  appId: "1:672703036063:web:5acbe379b05e658d9bc0aa",
  measurementId: "G-CN88HNXJHT",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
