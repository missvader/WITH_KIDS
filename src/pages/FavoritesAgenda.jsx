import React, {useContext, useState, useEffect } from "react";
import {db} from "../firebase/firebase"
import {updateDoc, doc, getDoc, onSnapshot} from "firebase/firestore";
import {AiOutlineDelete} from "react-icons/ai"
import { AuthContext } from "../contexts/AuthProvider";

const FavoritesAgenda = () => {
  const {currentUser} = useContext(AuthContext)
  const [favAgenda, setFavAgenda] = useState([]);
  const favAgendaID = doc(db, 'users', `${currentUser.uid}`)

  /*useEffect(() =>{
    const getFavoritesAgenda = async () => {
      const favoriteAgenda = await getDoc(favAgendaID)
      setFavAgenda(favoriteAgenda.data().favoritesAgenda)
    } 
    getFavoritesAgenda();
}, [])//lo dejo vacio o pongo currentUser???*/
/*este delete agenda no funciona */
  /*const deleteFavoriteAgenda = async (id) =>{
    try{
      const result = favAgenda.filter((item) => item.id !== id)
      await updateDoc(favAgendaID, {
          favoritesAgenda:result
      })
      setFavAgenda(result);
      window.location.reload();
    }catch (error){
      console.log(error)
    }
  }*/
  
/*OBTENER FAV DE BASE DATOS */
useEffect(() => {
  onSnapshot(favAgendaID, (favoriteAgenda) => {
    setFavAgenda(favoriteAgenda.data().favoritesAgenda)
  })
}, [currentUser.uid]);
/*BORRAR FAVORITO */
const deletedAgenda = async (passedID) => {
  try {
      const result = favAgenda.filter((item) => item.id !== passedID)
      await updateDoc(favAgendaID, {
          favoritesAgenda: result
      })
  } catch (error) {
        console.log(error.message)
      };
  
}
  return (
    <div className="container p-4">
      <h2 className="text-center font-bold font-sans underline">AGENDA ACTIVIDADES BARCELONA</h2>
            <div>
            {
              favAgenda?.map((item)=> {
                return (
                  <div key={item.id} className="flex flex-col">
                    <p>{item?.titol}</p>
                    <button className="justify-end" onClick={()=>deletedAgenda(item.id)}>
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
export default FavoritesAgenda;