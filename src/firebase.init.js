// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPFq3ZYYw7h1hewxm8DLCCCfEyckwNsQc",
  authDomain: "my-portfolio-a080b.firebaseapp.com",
  projectId: "my-portfolio-a080b",
  storageBucket: "my-portfolio-a080b.appspot.com",
  messagingSenderId: "400393414758",
  appId: "1:400393414758:web:ef8d45c87b356ced71a5a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;