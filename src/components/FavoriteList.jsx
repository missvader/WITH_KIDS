import React, {useState} from "react";
import FavoritesAgenda from "./FavoritesAgenda";
import FavoritesBiblio from "./FavoritesBiblio";
import FavoritesRest from "./FavoritesRest";

const FavoriteList = () => {
  /*Aqui va la logica de los 3 botones que renderizaran cada uno de los componentes de favoritos */
  const [selectedFav, setSelectedFav] = useState(null)
  const selectComponent = (componentId) => {
    switch(componentId){
      case 1:
        return <FavoritesAgenda/>;
      case 2: 
        return <FavoritesBiblio/>;
      case 3: 
        return <FavoritesRest/>;
      default:
        return null;
    }
  }

  return (
    <div>
        <button className="p-4" onClick={()=>setSelectedFav(1)}>AGENDA</button>
        <button className="p-4" onClick={()=>setSelectedFav(2)}>BIBLIOS</button>
        <button className="p-4" onClick={()=>setSelectedFav(3)}>RESTAURANTEs</button>
        {selectComponent(selectedFav)}
    </div>
  )
}
export default FavoriteList;