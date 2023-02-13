import Logo from '../assets/withKidsLogo.png';
import { useAuth } from "../contexts/AuthProvider";
import { NavLink } from "react-router-dom";

export default function Login(){
  const { handleChange, handleSubmitLogin, error } = useAuth();
  return(
    <div className=" flex flex-col mt-3 md:w-2/3 lg:w-3/5 xl:w-2/5 m-auto" >
        <div className="m-5">
          <div className="flex justify-center">
            <img 
            alt="logo"
            className="h-28 w-40 md:h-28 md:w-40 lg:h-40 lg:w-60"
            src={Logo}
            />
          </div>
          <h2 className="mt-4 text-center text-lg font-extrabold text-gray-500">
            ACCEDE A TU CUENTA
          </h2>
          <p className="mt-1 text-center text-sm text-gray-600 ">
            ¿Aún no tienes cuenta?
          <NavLink to="/signup" className="font-medium text-purple-600 hover:text-purple-800 hover:text-lg">
            Registrate
          </NavLink>
          </p>
        </div>
        <form className="m-4 space-y-6 form flex flex-col justify-center items-center" onSubmit={handleSubmitLogin}>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            required
            className={
              error
                ? "input input-bordered input-error w-full max-w-xs"
                : "input input-bordered w-full max-w-xs text-gray-400"
            }
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
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
          Acceder
          </button>
        </form>
      </div>
  )
}