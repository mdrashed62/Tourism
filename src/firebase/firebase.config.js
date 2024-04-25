// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvKg0ScjsZOaEULuCYmYd2i1JuNUL6mGk",
  authDomain: "tourism-client-firebase.firebaseapp.com",
  projectId: "tourism-client-firebase",
  storageBucket: "tourism-client-firebase.appspot.com",
  messagingSenderId: "94730854248",
  appId: "1:94730854248:web:b563b217e4bd9da84580dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;