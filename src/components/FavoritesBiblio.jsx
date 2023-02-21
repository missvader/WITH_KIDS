import React, {useContext, useState, useEffect } from "react";
import {db} from "../firebase/firebase"
import {updateDoc, doc, getDoc, onSnapshot} from "firebase/firestore";
import {AiOutlineDelete} from "react-icons/ai"
import { AuthContext } from "../contexts/AuthProvider";

const FavoritesBiblio = () => {
  const {currentUser} = useContext(AuthContext)
  const [favBiblio, setFavBiblio] = useState([]);
  const favBiblioID = doc(db, 'users', `${currentUser.uid}`)

  /*OBTENER FAV DE BASE DATOS */
  useEffect(() => {
    onSnapshot(favBiblioID, (favoriteBiblio) => {
    setFavBiblio(favoriteBiblio.data().favoritesBiblio)
    })
  }, [currentUser.uid]);
/*BORRAR FAVORITO */
const deletedBiblio = async (passedID) => {
  try {
      const result = favBiblio.filter((item) => item.id !== passedID)
      await updateDoc(favBiblioID, {
          favoritesBiblio: result
      })
  } catch (error) {
        console.log(error.message)
      };
  
}
  return (
    <div className="container p-4">
      <h2 className="text-center font-bold font-sans underline">AGENDA BIBLIOTECAS BARCELONA</h2>
            <div>
            {
              favBiblio?.map((item)=> {
                return (
                  <div key={item.id} className="flex flex-col">
                    <p>{item?.titol}</p>
                    <button className="justify-end" onClick={()=>deletedBiblio(item.id)}>
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

export default FavoritesBiblio;