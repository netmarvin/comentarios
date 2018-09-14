import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCi1hqls7VyJckzaXAiUmkL55PrkeoLDFo",
    authDomain: "comments-34b8a.firebaseapp.com",
    databaseURL: "https://comments-34b8a.firebaseio.com",
    projectId: "comments-34b8a",
    storageBucket: "comments-34b8a.appspot.com",
    messagingSenderId: "878041326553"
  };

firebase.initializeApp(config);

export const database = firebase.database()
//export const auth - firebase.auth()




