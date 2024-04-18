import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDE_PTy8OPWvKCAHNCntEkCVg6JJlvrrbE",
    authDomain: "organix-898be.firebaseapp.com",
    databaseURL: "https://organix-898be-default-rtdb.firebaseio.com",
    projectId: "organix-898be",
    storageBucket: "organix-898be.appspot.com",
    messagingSenderId: "270007385408",
    appId: "1:270007385408:web:bf82e67869293eb4570ea5",
    measurementId: "G-X4E00WV895",
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;