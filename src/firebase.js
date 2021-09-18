import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJ8xjJZv8CRfHHh03KeuebhCXhzcioFAs",
    authDomain: "netflix-clone-46455.firebaseapp.com",
    projectId: "netflix-clone-46455",
    storageBucket: "netflix-clone-46455.appspot.com",
    messagingSenderId: "57618964059",
    appId: "1:57618964059:web:e7dd831488ad724d4e697e",
    measurementId: "G-XEZPLZVJVC",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
