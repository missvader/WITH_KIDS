import React from "react"
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const FavoriteList = () => {
  const {actBiblio, favoritesBiblio,filteredAct, favoritesAgenda,geoRestaurantes, favoritesRest }= useContext(DataContext)

  return (
    <div>
      Lista de favoritos
       </div>
  )
}
export default FavoriteList;