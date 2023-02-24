import React, {useContext, useState, useEffect } from "react";
import {db} from "../firebase/firebase"
import {updateDoc, doc, getDoc, onSnapshot} from "firebase/firestore";
import {AiOutlineDelete} from "react-icons/ai"
import { AuthContext } from "../contexts/AuthProvider";

const FavoritesRest = () => {
  const {currentUser} = useContext(AuthContext)
  const [favRest, setFavRest] = useState([]);
  const favRestID = doc(db, 'users', `${currentUser.uid}`)

   /*OBTENER FAV DE BASE DATOS */
   useEffect(() => {
    onSnapshot(favRestID, (favoriteRestaurant) => {
    setFavRest(favoriteRestaurant.data().favoritesRestaurants)
    })
  }, [currentUser.uid]);
  /*BORRAR FAVORITO */
  const deletedRest = async (passedID) => {
    try {
      const result = favRest.filter((item) => item.id !== passedID)
        await updateDoc(favRestID, {
          favoritesRestaurants: result
        })
      } catch (error) {
        console.log(error.message)
      };
  
    }
  return (
    <div className="container p-4">
      <h2 className="text-center font-bold font-sans underline">RESTAURANTES</h2>
            <div>
            {
              favRest?.map((item)=> {
                return (
                  <div key={item.id} className="flex flex-col">
                    <p>{item?.name}</p>
                    <button className="justify-end" onClick={()=>deletedRest(item.id)}>
                      <AiOutlineDelete/>
                    </button>
                  </div>
                )
              })
                
              
              }
            </div>
          </div>
  )
}

export default FavoritesRest;