// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa3gTcg7gscfpjRDCSjX1VooY04j_9zo0",
  authDomain: "cheftrackers.firebaseapp.com",
  projectId: "cheftrackers",
  storageBucket: "cheftrackers.appspot.com",
  messagingSenderId: "65680867712",
  appId: "1:65680867712:web:60c2015886407d49818165",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;