import React from "react";
import FavoritesAgenda from "./FavoritesAgenda";
import FavoritesBiblio from "./FavoritesBiblio";
import FavoritesRest from "./FavoritesRest";

const FavoriteList = () => {
  /*Aqui va la logica de los 3 botones que renderizaran cada uno de los componentes de favoritos, pendiente tambien hacer los 3 botones  */
  return (
    <div>
        <FavoritesAgenda/>
        <FavoritesBiblio/>
        <FavoritesRest/>
    </div>
  )
}
export default FavoriteList;