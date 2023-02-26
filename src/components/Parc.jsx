import React from "react";
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
const Parc = ({adreca, districte}) => {
  return (
    <div className="mx-auto bg-verde px-8  py-2">
      <div className="card  bg-base-100 shadow-xl">
       <div className="card-body">
          <p>{adreca}</p>
          <p>{districte}</p>
        </div>
      </div>
    </div>
  )
}
export default Parc;