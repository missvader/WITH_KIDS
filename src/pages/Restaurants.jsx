import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Restaurant from "../components/Restaurant";
import "../App.css"

const Restaurants = () => {
    const { geoRestaurantes, favoritesRest, setFavoritesRest}= useContext(DataContext);
    const dataRest = geoRestaurantes.features;
    const addFavRest = (dataRest) =>{
      const newFavList = [...favoritesRest, dataRest];
      setFavoritesRest(newFavList);
    }
  return (
    <div className="container ">
            <div>
            {
              dataRest?.map((item, index)=> (
                <Restaurant
                  key={index}
                  id={item.properties.id}
                  name={item.properties.name}
                  address = {item.properties.address}
                  phone = {item.properties.phone}
                  web = {item.properties.web}
                  tags = {item.properties.tags}
                  image = {item.properties.image}
                  addFavRest={addFavRest}
                />
              ))
              }
            </div>
          </div>
  )
}

export default Restaurants;