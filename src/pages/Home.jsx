import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>HOME PAGE IN CONSTRUCTION</h1>
      <Link to="/list" className=" link">
        <button className=" btn  m-5 ">LIST DATA</button>
      </Link>
      <Link to="/map" className="link">
        <button className=" btn m-5 ">MAP</button>
      </Link>
    </div>
  )
}
export default Home;