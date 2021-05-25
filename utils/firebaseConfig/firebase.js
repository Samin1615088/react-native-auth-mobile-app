import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9N553WJdLsDQc21SeqKL7l9_q6QkuBc4",
    authDomain: "react-native-firebase-au-678ca.firebaseapp.com",
    projectId: "react-native-firebase-au-678ca",
    storageBucket: "react-native-firebase-au-678ca.appspot.com",
    messagingSenderId: "732136739382",
    appId: "1:732136739382:web:08c56c5973673790ae7e97",
    measurementId: "G-C2ZY3C2LSN"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
    
}