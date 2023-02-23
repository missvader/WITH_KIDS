import {useState, useContext, useEffect} from "react";
import {NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Logo from '../assets/withKidsLogo.png';
import Background from "../assets/backgroundApp.png"
export default function Signup(){
  
  const {
    signUp, 
    username,
    setUsername, 
    password,
    setPassword,
    email,
    setEmail,
    error, 
    setError
  } = useContext(AuthContext);
  /*const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signUp(email, password);
    if(error) {
      console.log(error)
    }
    setEmail("");
    setPassword("");
    setUsername("");
  }
  /*"input input-bordered w-full max-w-xs text-gray-400 "*/
  return(
      <div className="  flex flex-col grid justify-items-center md:w-2/3 lg:w-3/5 xl:w-2/5 m-auto static h-screen w-screen " >
          <img src={Background} alt="background" className="bg-image w-screen absolute bottom-0 opacity-50"/>
        <div className="container absolute flex flex-col ">
          <div className=" ">
            <div className="flex justify-center mt-10">
              <img 
              alt="logo"
              className="logo"
              src={Logo}
              />
            </div>
            <h2 className="mt-4 text-center text-lg  text-lila">
            REGISTRATE
            </h2>
            <p className="mt-1 text-center text-sm font-normal ">
              ¿Ya estás registrad@?
            <NavLink to="/login" className="font-medium text-lila hover:text-purple-800 hover:text-lg">
              &nbsp;Login
            </NavLink>
            </p>
          </div>
          <form className="space-y-4 mt-2 form flex flex-col justify-items-end grid" onSubmit={handleSubmit}>
            <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
            type="text"
            placeholder="Username"
            required
            className={
              error
                ? "input input-bordered input-error "
                : "input input-bordered  text-gray-400"
              }   
          
            />
            <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            required
            className={
              error
                ? "input input-bordered input-error "
                : "input input-bordered  text-gray-400"
              }
            />
            <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            minLength="6"
            required
            className={
              error
                ? "input input-bordered input-error "
                : "input input-bordered text-gray-400"
              }
            />
            <button
            type="submit"
            className="btn  w-28 h-8 bg-lila my-8  hover:btn-secondary-focus"
            >
            Registrarse
            </button>
          </form>
        </div> 
      </div>
  )
}