import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMoQIlY-kAku0BFoszyFAZ0MCyb3EDpp8",
  authDomain: "twitter-clone-52e9a.firebaseapp.com",
  projectId: "twitter-clone-52e9a",
  storageBucket: "twitter-clone-52e9a.appspot.com",
  messagingSenderId: "364731000476",
  appId: "1:364731000476:web:7b7c802b4adf073100ef59",
  measurementId: "G-46C90H1W7R"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLLECTION = db.collection("users")