import React from "react";
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
const Restaurant = ({name, adreca}) => {
  return (
    <div>
    <ul className="bg-amarillo/50 mt-7 rounded p-4">
      <li>{name}</li>
      <li>{adreca}</li>
    </ul>
    </div>
  )
}
export default Restaurant;