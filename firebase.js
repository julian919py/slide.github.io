// Import the functions you need from the SDKs you need
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCx9pd4uYJdBCHPrPt3NLU_FBS4OgrxC34",
    authDomain: "fir-app-2753a.firebaseapp.com",
    projectId: "fir-app-2753a",
    storageBucket: "fir-app-2753a.appspot.com",
    messagingSenderId: "1065734046472",
    appId: "1:1065734046472:web:3e23e60842e8a119dee2bd"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)