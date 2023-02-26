import React, {useContext, useState, useEffect } from "react";
import {db} from "../firebase/firebase"
import {updateDoc, doc, getDoc, onSnapshot} from "firebase/firestore";
import {AiOutlineDelete} from "react-icons/ai"
import { AuthContext } from "../contexts/AuthProvider";
import NoFav from "../components/NoFav";
import HeaderRest from "../components/HeaderRest";
import Background from "../assets/backgroundApp.png"

const RestFavorites = () => {
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
    <div className="flex flex-col  m-auto static h-screen w-screen">
      <img src={Background} alt="background" className="bg-image w-screen absolute bottom-0 opacity-50"/>
      <div className="container absolute flex flex-col ">
        <HeaderRest/>
            <div>
            {
              (favRest.length > 0)
              ? favRest.map((item)=> {
                return (
                  <div key={item.id} className=" grid grid-cols-2 border-2 bg-white border-amarilloCard mx-10 my-5 h-16 rounded">
                    <p className="self-center ml-3 text-gray-600 font-semibold">{item.name}</p>
                    <button className="justify-self-end self-end mr-3 mb-2" onClick={()=>deletedRest(item.id)}>
                      <AiOutlineDelete size={20}/>
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

export default RestFavorites;
