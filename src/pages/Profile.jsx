import React from "react";
import FavoriteList from "../components/FavoriteList";
import { useAuth } from '../contexts/AuthProvider';
const Profile = () => {
  const {clickSignOut} = useAuth();
  /*<Link to={"/login"}>
        <button className="btn btn-xs m-5">LOGIN</button>
      </Link> 
      <Link to={"/signup"}>
        <button className="btn btn-xs m-5">SIGNUP</button>
      </Link>*/
  return (
    <div> 
    <div className="bg-gray-400 border-black m-5 border rounded-lg h-32 text-center ">
      <div className="text-xl font-bold">BIENVENID@!</div> 
      <div className="">
        <button className="btn btn-xs m-5" onClick={clickSignOut}>
          CERRAR SESIóN
        </button>
      </div>
    </div>
    
    <div className="bg-amarillo m-5 border border-black rounded-lg text-center">FAVORITOS</div>
    <FavoriteList/>
    </div>
    
  )
}

export default Profile