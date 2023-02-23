import React from "react";
import {useContext , useState, useEffect} from "react";
import { DataContext } from "../contexts/DataContext";
import Restaurant from "../components/Restaurant";
import Background from "../assets/backgroundApp.png"
import "../App.css"

const Restaurants = () => {
    const { geoRestaurantes}= useContext(DataContext);
    const dataRest = geoRestaurantes.features;
  
  return (
    <div className="container h-6/7">

        <div className="">

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
                />
              ))
              }
            </div>
            
          </div>
  )
}

export default Restaurants;