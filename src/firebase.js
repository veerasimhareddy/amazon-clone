import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB0SAfBHIp3O216vDzNoTepjyKRP0WZGL8",
    authDomain: "challenge-9d212.firebaseapp.com",
    projectId: "challenge-9d212",
    storageBucket: "challenge-9d212.appspot.com",
    messagingSenderId: "825308289477",
    appId: "1:825308289477:web:fcd5274482920868d893ac",
    measurementId: "G-HBCSLBGG04"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };