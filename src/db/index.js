import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeqFpbRgq2r4j5qqlolXATBco2Hp0sxmw",
  authDomain: "protein-patika-vue.firebaseapp.com",
  projectId: "protein-patika-vue",
  storageBucket: "protein-patika-vue.appspot.com",
  messagingSenderId: "985070029537",
  appId: "1:985070029537:web:54b8c827a34556f09285a0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
