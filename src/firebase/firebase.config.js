// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9mWUTR3lIDO7fRCf5kKug3LZMOXscapg",
  authDomain: "react-ecommerce-app-2c146.firebaseapp.com",
  projectId: "react-ecommerce-app-2c146",
  storageBucket: "react-ecommerce-app-2c146.appspot.com",
  messagingSenderId: "751796813718",
  appId: "1:751796813718:web:8cdf9a5aab81b7207d27b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app