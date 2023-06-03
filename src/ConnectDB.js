import { initializeApp, } from "firebase/app"
import { getFirestore } from "firebase/firestore"


//your web app firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCWlXmkaHTKYck5IBfOOq6tXXsNX4Te2Y",
  authDomain: "todo-c36fa.firebaseapp.com",
  projectId: "todo-c36fa",
  storageBucket: "todo-c36fa.appspot.com",
  messagingSenderId: "651658289279",
  appId: "1:651658289279:web:e8c2941ed8152f4ff85f4a"
}

//initialize firebase
const connectFirebase = initializeApp(firebaseConfig)
const db = getFirestore(connectFirebase)

export default db