import { initializeApp } from "firebase/app";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAKMh2EUso2Ha1SPNkKu3er4p-p5a2jRW4",
  authDomain: "cleaning-reservations.firebaseapp.com",
  projectId: "cleaning-reservations",
  storageBucket: "cleaning-reservations.appspot.com",
  messagingSenderId: "1017327694894",
  appId: "1:1017327694894:web:6e80f0e52ffcb19a045bbf"
};

if(!firebaseConfig.length){
  initializeApp(firebaseConfig);
  //used to be firebase.initializeApp(firebaseConfig)
}
//const db = firebase.firestore();
export default db;