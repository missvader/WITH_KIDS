import React, {useContext, useState, useEffect } from "react";
import {db} from "../firebase/firebase"
import {updateDoc, doc, getDoc, onSnapshot} from "firebase/firestore";
import {AiOutlineDelete} from "react-icons/ai"
import { AuthContext } from "../contexts/AuthProvider";
import HeaderBiblio from "../components/HeaderBiblio";
import NoFav from "../components/NoFav";
import Background from "../assets/backgroundApp.png"


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
    <div className="container flex flex-col  m-auto static h-screen  w-screen overflow-auto">
      <img src={Background} alt="background" className="bg-image fixed bottom-0 opacity-50"/>
      <div className="container absolute flex flex-col ">
        <HeaderBiblio/>
          <div>
            {
              (favBiblio.length > 0)
              ? favBiblio.map((item)=> {
                return (
                  <div key={item.id} className=" grid grid-flow-cols bg-white border-2 border-lila mx-10 my-5 min-h-16 rounded">
                    <p className="self-cemter ml-3 text-lila font-semibold">{item.titol}</p>
                    <button className="justify-self-end self-end mr-3 mb-2" onClick={()=>deletedBiblio(item.id)}>
                      <AiOutlineDelete/>
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

export default FavoritesBiblio;