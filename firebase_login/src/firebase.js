import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCnCeJYA_KGBk3JF-cM5G7i0_pokygjBG4",
  authDomain: "reactapp-e10b6.firebaseapp.com",
  databaseURL: "https://reactapp-e10b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactapp-e10b6",
  storageBucket: "reactapp-e10b6.appspot.com",
  messagingSenderId: "927539741560",
  appId: "1:927539741560:web:9d42f265f2ebb6448cbe8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;