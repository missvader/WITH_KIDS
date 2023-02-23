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
      <div className=" flex flex-col mt-1 md:w-2/3 lg:w-3/5 xl:w-2/5 m-auto h-screen " >
          <img src={Background} alt="background" className="bg-image w-screen absolute bottom-0 opacity-50"/>

        <div className="m-5 ">
          <div className="flex justify-center ">
            <img 
            alt="logo"
            className="h-28 w-40 md:h-28 md:w-40 lg:h-40 lg:w-60"
            src={Logo}
            />
          </div>
          <h2 className="mt-4 text-center text-lg font-extrabold text-gray-500">
            REGISTRATE
          </h2>
          <p className="mt-1 text-center text-sm text-gray-600 ">
            ¿Ya estás registrad@?
          <NavLink to="/login" className="font-medium text-purple-600 hover:text-purple-800 hover:text-lg">
            Login
          </NavLink>
          </p>
        </div>
        <form className="m-4 space-y-6 form flex flex-col justify-center items-center " onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
            type="text"
            placeholder="Username"
            required
            className={
              error
                ? "input input-bordered input-error w-full max-w-xs"
                : "input input-bordered w-full max-w-xs text-gray-400"
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
                ? "input input-bordered input-error w-full max-w-xs"
                : "input input-bordered w-full max-w-xs text-gray-400"
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
                ? "input input-bordered input-error w-full max-w-xs"
                : "input input-bordered w-full max-w-xs text-gray-400"
            }
          />
          <button
            type="submit"
            className="btn bg-lila my-8 w-full max-w-xs hover:btn-secondary-focus
            "
          >
          Registrarse
          </button>
        </form>
      </div>
  )
}