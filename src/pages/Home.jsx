import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapComponent from "../components/MapComponent";
const Home = () => {
  /**/
  return(
    <div className="container bg-verde h-screen flex-col flex">
      <div className="map " id="map">
        <MapComponent/>
      </div>
        
      
      <div className="start bg-naranja ">Start Section</div>
    </div>
  )
}

export default Home;