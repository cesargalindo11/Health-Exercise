import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyCGJ1NrZdVV1_KecBNEKKu8aPqOTMZvD8w",
  authDomain: "saludyejercicio-8966d.firebaseapp.com",
  projectId: "saludyejercicio-8966d",
  storageBucket: "saludyejercicio-8966d.appspot.com",
  messagingSenderId: "892550091944",
  appId: "1:892550091944:web:60a6a58f15ab3779879e9d"

};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()

// const fireb = firebase.initializeApp(firebaseConfig)
const store = fire.firestore()

export {auth}
export {store}
