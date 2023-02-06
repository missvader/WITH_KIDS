import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Restaurant from "../components/Restaurant";
import "../App.css"

const Restaurants = () => {
    const { geoRestaurantes}= useContext(DataContext);
    const dataRest = geoRestaurantes.features;
  return (
    <div className="container ">
            <div>
            {
              dataRest?.map((item, index)=> (
                <Restaurant
                  key={index}
                  name={item.properties.name}
                  address = {item.properties.address}
                  phone = {item.properties.phone}
                  web = {item.properties.web}
                  tags = {item.properties.tags}
                  image = {item.properties.image}
                  
                />
              ))
              }
            </div>
          </div>
  )
}

export default Restaurants;