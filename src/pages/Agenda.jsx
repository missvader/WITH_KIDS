import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Actividad from "../components/Actividad";
import { addDoc, collection, } from "firebase/firestore";
import { db} from "../firebase/firebase";

import "../App.css"
const Agenda = () => {
  const {filteredAct,currentUser,  favoritesAgenda, setFavoritesAgenda }= useContext(DataContext);
  /*const addFavAct = (filteredAct) =>{
    const newFavList = [...favoritesAgenda, filteredAct];
    setFavoritesAgenda(newFavList);
  }*/
  
  const addFavAgenda = (userId, filteredAct) => {
    
    
    const userRef = collection('users').doc(userId);
    const favoritesRef = userRef.collection('favoritesAgenda');

    favoritesRef.add(filteredAct)
      .then((docRef) => {
        console.log('New fav added with Id: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding fav: ', error)
      })
  };
  return (
    <div className="container ">
            <div>
            {
              filteredAct?.map((item)=> (
                <Actividad
                  key={item.codi}
                  id={item.codi}
                  titol={item.denominaci}
                  adreca={item.espai}
                  data={item.data_inici}
                  entrades= {item.entrades}
                  image= {item.imatges}
                  errorImage = {item.imgapp}
                  url={item.url}
                  link={item.enlla_os}
                  addFavAct={addFavAgenda}
                />
              ))
              }
            </div>
          </div>
  )
}

export default Agenda;