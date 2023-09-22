import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbgOx1Qeb0maOxIVMspfrYqcBbtasA5yA",
  authDomain: "disney-plus-45419.firebaseapp.com",
  projectId: "disney-plus-45419",
  storageBucket: "disney-plus-45419.appspot.com",
  messagingSenderId: "67596368877",
  appId: "1:67596368877:web:343cfb9c0c9a08c9f4c5e4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default dbConfig