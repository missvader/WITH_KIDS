import React from "react"
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const FavoriteList = () => {
  
  const {actBiblio, favoritesBiblio,filteredAct, favoritesAgenda,geoRestaurantes, favoritesRest }= useContext(DataContext)
//Hacer una favoriteList para cada una de las listas de favoritos???????
  return (
    <div>
      FAVORITE LIST
    </div>
  )
}
export default FavoriteList;