import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJ7YxbSc_YmPZgS-E0hPh6M9leWBHZTEw",
  authDomain: "with-kids-app-f7118.firebaseapp.com",
  databaseURL: "https://with-kids-app-f7118-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "with-kids-app-f7118",
  storageBucket: "with-kids-app-f7118.appspot.com",
  messagingSenderId: "432004338076",
  appId: "1:432004338076:web:e9798ccae11bada6bef859"
};
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
export const db = getDatabase(app);