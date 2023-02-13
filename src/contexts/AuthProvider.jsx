import React, { createContext, useState, useEffect, useContext } from "react";
import { 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword, 
} from "firebase/auth";
import { auth} from "../firebase/firebaseConfig";
import {useNavigate} from 'react-router-dom'
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email:"",
    password:"",
    username:"",
    favorites:{},
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate= useNavigate();

  const signup = (username, email, password) => {
    createUserWithEmailAndPassword(auth, username, email, password)
  }
  
    
  const login = (email, password) => 
    signInWithEmailAndPassword(auth, email, password);

  const handleChange = ({target: {name, value}}) => {
    setUserData({...userData, [name]: value});
  }
  //SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(userData.email, userData.password, userData.username);
      navigate("/profile");
    }catch(error) {
      console.log("error registro", error);
      if(error.code === "auth/internal-error"){
        setError("Los datos no son correctos")
      }
      if(error.code === "auth/weak-password"){
        setError("Contraseña débil, escoge una más larga")
      }
      if(error.code === "auth/invalid-email"){
        setError("Email no válido")
      }
      if(error.code === "auth/email-already-in-use"){
        setError("Usuario ya registrado")
      }
    }
    console.log(user)
  };

  //LOGIN
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(userData.email, userData.password);
      setUserData({email: '', password: ''})
      navigate("/profile");
    } catch (error) {
      console.log("error en login", error);
      if(error.code === "auth/user-not-found"){
        setError("Usuario no registrado")
      }
      if(error.code === "auth/invalid-email") {
        setError("Email no válido")
      }
      if(error.code === "auth/wrong-password"){
        setError("Password incorrecto")
      }
    }
  };
  //LOG OUT
  const logout = () => signOut(auth);
  //GUARDAR EN BASE DATOS
  
  useEffect(() => {

  })
  // esta función de Firebase nos devuelve la información cada vez que el usuario cambia: abre o cierra sesión, etc
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{
      handleChange,
      handleSubmit,
      handleSubmitLogin,
      logout,
      error,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};