import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOeT9Z1WBpt_1z0-hShiIcrMKj9V67590",
  authDomain: "todo-list-fb-afae3.firebaseapp.com",
  projectId: "todo-list-fb-afae3",
  storageBucket: "todo-list-fb-afae3.appspot.com",
  messagingSenderId: "67334857402",
  appId: "1:67334857402:web:3216e2dc760b1b80951883"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
