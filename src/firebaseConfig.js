import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDx102PBRftLlF4_ggcmkdABoKU2oyBG1M",
  authDomain: "pruebasesion.firebaseapp.com",
  projectId: "pruebasesion",
  storageBucket: "pruebasesion.appspot.com",
  messagingSenderId: "552503177778",
  appId: "1:552503177778:web:1b461d3d47e460bc01022b",
  measurementId: "G-SR9DX8MPTE"

 /* apiKey: "AIzaSyCGJ1NrZdVV1_KecBNEKKu8aPqOTMZvD8w",
  authDomain: "saludyejercicio-8966d.firebaseapp.com",
  projectId: "saludyejercicio-8966d",
  storageBucket: "saludyejercicio-8966d.appspot.com",
  messagingSenderId: "892550091944",
  appId: "1:892550091944:web:60a6a58f15ab3779879e9d"*/

};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);





