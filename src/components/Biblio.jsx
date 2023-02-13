import React from "react";
import { FaHeart } from 'react-icons/fa';

const Biblio = ({titol, tags, adreca, data, dies, durada, tipus, publico, imatge, url}) => {
  return (
  <div className="mx-auto bg-lila p-8 ">
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="h-72"><img 
        src={imatge} 
        alt="biblio activity image"
        className="w-full h-72"
        /></figure>
      <div className="card-body">
        <div className="card-title bg-lila/25 rounded-lg p-2"> 
          <h2 className="">{titol}</h2>
        </div>
        <div className="p-2">
          <p>{adreca}</p>
          <p>{tipus}</p>
          <p>{data}</p>  
        </div> 
        
        <div className="card-actions flex justify-between">
          <button className="  "><FaHeart color="red" size="25px"/></button>
          <button 
          className="btn btn-primary btn-xs"
          onClick={() => window.open(url, '_blank')}
          >More Info</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Biblio;