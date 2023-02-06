import React from "react";

import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
const Restaurant = ({name, address, web, phone, tags, image}) => {
  return (
    <div className="mx-auto bg-amarillo p-8 ">
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="restaurant  image"
          className="w-full h-72"
        />
        </figure>
      <div className="card-body">
        <div className="card-title bg-amarillo/25 rounded-lg p-2"> 
          <h2 className="">{name}</h2>
        </div>
        <div className="p-2">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{tags}</p>  
        </div> 
        <div className="card-actions justify-end">
          <button 
          className="btn btn-primary btn-xs"
          onClick={() => window.open(web, '_blank')}
          >More Info</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Restaurant;