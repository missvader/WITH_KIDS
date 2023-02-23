import {useState, useContext} from "react";
import Logo from '../assets/withKidsLogo.png';
import {NavLink} from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Background from "../assets/backgroundApp.png"

export default function Login(){
  const {
    signIn,
    email,
    setEmail,
    password,
    setPassword,
    error, 
    setError
  } = useContext(AuthContext);
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(email, password);
    if (res.error) setError(res.error);
    setEmail("");
    setPassword("");
  };
  /*m-4 space-y-6  */
  return(
    <div className=" flex flex-col grid justify-items-center md:w-2/3 lg:w-3/5 xl:w-2/5 m-auto static h-screen w-screen" >
        <img src={Background} alt="background" className="bg-image w-screen absolute bottom-0 opacity-50"/>
      <div className="container absolute flex flex-col ">
        <div className="m-5">
          <div className="flex justify-center mt-10">
            <img 
            alt="logo"
            className="logo "
            src={Logo}
            />
          </div>
          <h2 className="mt-4 text-center text-lg  text-lila">
            ACCEDE A TU CUENTA
          </h2>
          <p className="mt-1 text-center text-sm font-normal ">
            ¿Aún no tienes cuenta?
          <NavLink to="/signup" className="text-sm font-normal text-lila hover:text-purple-800 hover:text-lg">
            &nbsp;Registrate
          </NavLink>
          </p>
        </div>
          {error ? <div>{error}</div> : null}
        <form className=" space-y-6 form flex flex-col justify-items-end grid" onSubmit={handleSubmit} >
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
                : "input input-bordered text-gray-400"
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
                ? "input input-bordered input-error"
                : "input input-bordered  text-gray-400"
            }
          />
          <button
              type="submit"
              className="btn  w-28 h-8 bg-lila my-8  hover:btn-secondary-focus"
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  )
}
