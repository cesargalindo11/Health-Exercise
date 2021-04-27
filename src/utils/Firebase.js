import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCGJ1NrZdVV1_KecBNEKKu8aPqOTMZvD8w",
    authDomain: "saludyejercicio-8966d.firebaseapp.com",
    projectId: "saludyejercicio-8966d",
    storageBucket: "saludyejercicio-8966d.appspot.com",
    messagingSenderId: "892550091944",
    appId: "1:892550091944:web:60a6a58f15ab3779879e9d"
};

const fb = firebase.initializeApp(firebaseConfig);

export const auth = fb.firestore();

  //export default db
