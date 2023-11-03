import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAr1_79tY4PWWLLejJNwbQ3OIKE47VwaeY",
  authDomain: "nwitter-new-f08cd.firebaseapp.com",
  projectId: "nwitter-new-f08cd",
  storageBucket: "nwitter-new-f08cd.appspot.com",
  messagingSenderId: "918493152370",
  appId: "1:918493152370:web:ed151b94656c16589feeeb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
