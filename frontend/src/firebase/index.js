import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA7UZ01Gg3Ksvr3N0IsX-nYWF8ZP6blKXo",
  authDomain: "shop-c7146.firebaseapp.com",
  projectId: "shop-c7146",
  storageBucket: "shop-c7146.appspot.com",
  messagingSenderId: "844884694888",
  appId: "1:844884694888:web:938ad8bfe34ac79b7068dd",
  measurementId: "G-RLVCPXR22P",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
