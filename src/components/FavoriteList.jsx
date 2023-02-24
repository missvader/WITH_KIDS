import React from "react";
import { Link } from "react-router-dom";


const FavoriteList = () => {
  
  return (
    <div className="flex flex-col grid place-content-center">
      <Link to="/favoritesAgenda">
        <div className="p-4 w-64 bg-naranja rounded-md m-5 text-white text-center" >
          AGENDA CULTURAL
        </div>
      </Link>
      <Link to="/favoritesRest">
        <div className="p-4 w-64 bg-amarillo rounded-md m-5 text-center " >
          RESTAURANTS
        </div>
      </Link>  
      <Link to="/favoritesBiblio">
        <div className="p-4 w-64 bg-lila rounded-md m-5 text-white text-center" >
          BIBLIO AGENDA
        </div>
      </Link>  
    </div>
  )
}
export default FavoriteList;