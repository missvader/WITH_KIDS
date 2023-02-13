import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div> 
    <div className="bg-gray-400 border-black m-5 border rounded-lg h-32  ">
      Hola, {userData.username}
      <Link to={"/login"}>
        <button className="btn btn-xs m-5">LOGIN</button>
      </Link> 
      <Link to={"/signup"}>
        <button className="btn btn-xs m-5">SIGNUP</button>
      </Link>
    </div>
    
    <div className="bg-amarillo m-5 border border-black rounded-lg text-center">FAVORITOS</div>
    </div>
    
  )
}

export default Profile