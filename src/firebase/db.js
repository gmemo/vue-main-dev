import firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCqS7fsv6HYgaW8HpmoxvdwHfEXNaemr3s",
    authDomain: "fir-vue-4994f.firebaseapp.com",
    projectId: "fir-vue-4994f",
    storageBucket: "fir-vue-4994f.appspot.com",
    messagingSenderId: "947310034496",
    appId: "1:947310034496:web:697e16615755a3ca9ae9a5"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();