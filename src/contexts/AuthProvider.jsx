import React, { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import firebaseApp from "../firebase/firebase";
import {
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
const auth = getAuth(firebaseApp);

export const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const navigate= useNavigate();
  //SIGNUP
  async function register(e){
    e.preventDefault();
      const user = await createUserWithEmailAndPassword(auth, email, password)
  }
  
  //LOGIN
  async function login(e){
    e.preventDefault();
      const user = await signInWithEmailAndPassword(auth, email, password)
  }
  //esta funcion de firebase va a estar revisando cada vez que haya un cambio de sesión
  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setCurrentUser(userFirebase);
      } else {
        setCurrentUser(null);
      }
    });
    console.log("currentUser -->",currentUser);
  }, [currentUser]);
  //SIGNOUT
  const clickSignOut = () => {signOut(auth)};
  return (
    <AuthContext.Provider value={{ 
      setEmail,
      setCurrentUser,
      setError,
      setPassword,
      setUsername,
      currentUser,
      email,
      password,
      username,
      error,
      register,
      login,
      clickSignOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};