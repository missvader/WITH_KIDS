import React, {useContext, useState, useEffect } from "react";
import {db} from "../firebase/firebase"
import {updateDoc, doc, getDoc, onSnapshot} from "firebase/firestore";
import {AiOutlineDelete} from "react-icons/ai"
import { AuthContext } from "../contexts/AuthProvider";
import Background from "../assets/backgroundApp.png"
import HeaderAgenda from "../components/HeaderAgenda";
import NoFav from "../components/NoFav";
const FavoritesAgenda = () => {
  const {currentUser} = useContext(AuthContext)
  const [favAgenda, setFavAgenda] = useState([]);
  const favAgendaID = doc(db, 'users', `${currentUser.uid}`)
  
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
    <div className="container flex flex-col  m-auto static h-screen  w-screen overflow-auto ">
      <img src={Background} alt="background" className="bg-image fixed bottom-0 opacity-50"/>
      <div className="container absolute flex flex-col ">
        <HeaderAgenda/>
            <div className="mb-16">
            {
              (favAgenda.length > 0)
              ? favAgenda.map((item)=> {
                return (
                  <div key={item.id} className="grid grid-flow-cols bg-white border-2 border-naranja mx-10 my-5 min-h-16 rounded">
                    <p className="self-cemter ml-3 text-naranja font-semibold">{item.titol}</p>
                    <button className="justify-self-end self-end mr-3 mb-2" onClick={()=>deletedAgenda(item.id)}>
                      <AiOutlineDelete size={20} className=""/>
                    </button>
                  </div>
                )
              })
              : <NoFav/>  
              }
            </div>
          </div>
    </div>
  )
}
export default FavoritesAgenda;