import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOa32-ZsYXzQTcSLpfa8T5xa4L_gVwhaw",
  authDomain: "house-marketplace-app-47176.firebaseapp.com",
  projectId: "house-marketplace-app-47176",
  storageBucket: "house-marketplace-app-47176.appspot.com",
  messagingSenderId: "484193359316",
  appId: "1:484193359316:web:cda8b510d0f5366f7db241",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
