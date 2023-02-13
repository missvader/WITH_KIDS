import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div> 
    <div>Profile</div>
    <Link to={"/login"}>
      <button className="btn">LOGIN</button>
    </Link> 
    <Link to={"/signup"}>
      <button className="btn">SIGNUP</button>
    </Link>
    </div>
  )
}

export default Profile