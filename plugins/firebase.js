import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBGTJfz01ULs4aWFaH9YLO2A11SONFaNZk",
  authDomain: "blog22-project.firebaseapp.com",
  databaseURL: "https://blog22-project.firebaseio.com",
  projectId: "blog22-project",
  storageBucket: "blog22-project.appspot.com",
  messagingSenderId: "788896761911",
  appId: "1:788896761911:web:993014b03278f41a9dd7b2"
};
// Initialize Firebase


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

