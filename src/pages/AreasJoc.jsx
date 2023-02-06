import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Parc from "../components/Parc";
import "../App.css"

const AreasJoc = () => {
  const {parques }= useContext(DataContext)
  return (
    <div className="container ">
            <div>
            {
              parques?.map( item => (
                <Parc
                  key={item._id}
                  adreca={item.Adreca}
                  districte={item.Codi_Districte}
                />
              ))
              }
            </div>
          </div>
  )
}

export default AreasJoc;