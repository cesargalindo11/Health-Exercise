import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA82TCZgUu6jbmGj3ypoAPRmKQf_EG4rAw",
  authDomain: "prueba-99e84.firebaseapp.com",
  databaseURL: "https://prueba-99e84.firebaseio.com",
  projectId: "prueba-99e84",
  storageBucket: "prueba-99e84.appspot.com",
  messagingSenderId: "451436873999",
  appId: "1:451436873999:web:1f61036141c055f445167a"
};

const fb = firebase.initializeApp(firebaseConfig);

export const auth = fb.firestore();

  //export default db
