import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdpiQuoaYHg45c4gUZSmk-CyX_l6R1Lxw",
  authDomain: "shop-selling-animal-food.firebaseapp.com",
  projectId: "shop-selling-animal-food",
  storageBucket: "shop-selling-animal-food.appspot.com",
  messagingSenderId: "1055474114231",
  appId: "1:1055474114231:web:0300fccb98ce37da003732",
  measurementId: "G-1MW7LVDTG6",
};

let app;
let db;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} else {
  app = firebase.app();
}
export { db };
