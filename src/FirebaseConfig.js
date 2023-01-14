// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAA982-6Nz8aJnIgyAcewquWoGOR8_iGio",
  authDomain: "fir-recipes-3899d.firebaseapp.com",
  projectId: "fir-recipes-3899d",
  storageBucket: "fir-recipes-3899d.appspot.com",
  messagingSenderId: "472869292232",
  appId: "1:472869292232:web:cfc6996f236d42d00efdfd",
  measurementId: "G-E61KJPEZPP"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;