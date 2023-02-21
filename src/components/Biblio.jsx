import React, {useState, useContext} from "react";
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import {db} from "../firebase/firebase";
import { AuthContext } from "../contexts/AuthProvider";


const Biblio = ({titol,id, tags, adreca,  data, dies, durada, tipus, publico, imatge, url, addFavActBiblio}) => {
  const {currentUser} = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const addFavoriteBiblio = async () => {
    if(currentUser !== null){
      const favBiblioID = doc(db, 'users', `${currentUser.uid}`)
      setLike(!like)
      setSaved(!saved)
      await updateDoc(favBiblioID, {
          favoritesBiblio: arrayUnion({
          id:id,
          titol: titol
        })
      })
    }else{
      alert('Inicia sesión para guardar favoritos')
    }
  }

  return (
  <div className="mx-auto bg-lila p-8 ">
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="h-72"><img 
        src={imatge} 
        alt="biblio activity image"
        className="w-full h-72"
        /></figure>
      <div className="card-body">
        <div className="card-title bg-lila/25 rounded-lg p-2"> 
          <h2 className="">{titol}</h2>
        </div>
        <div className="p-2">
          <p>{adreca}</p>
          <p>{tipus}</p>
          <p>{data}</p>  
        </div> 
        
        <div className="card-actions flex justify-between">
          <button className=" heart "
            onClick={addFavoriteBiblio}>
              {like ? 
              <FaHeart color="red" size="25px"/> :
              <FaRegHeart size="25px"/>
              }
          </button>
          <button 
          className="btn btn-primary btn-xs"
          onClick={() => window.open(url, '_blank')}
          >More Info</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Biblio;