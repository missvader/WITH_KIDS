import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Actividad from "../components/Actividad";
import "../App.css"

const Agenda = () => {
  const {filteredAct, favorites, setFavorites }= useContext(DataContext);
  const addFavAct = (filteredAct) =>{
    const newFavList = [...favorites, filteredAct];
    setFavorites(newFavList);
  }
  return (
    <div className="container ">
            <div>
            {
              filteredAct?.map((item)=> (
                <Actividad
                  key={item.codi}
                  id={item.codi}
                  titol={item.denominaci}
                  adreca={item.espai}
                  data={item.data_inici}
                  entrades= {item.entrades}
                  image= {item.imatges}
                  errorImage = {item.imgapp}
                  url={item.url}
                  link={item.enlla_os}
                  addFavAct={addFavAct}
                />
              ))
              }
            </div>
          </div>
  )
}

export default Agenda;