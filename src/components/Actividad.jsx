import React, {useState, useContext} from "react";
import { FaHeart } from 'react-icons/fa';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import {db} from "../firebase/firebase";
import { AuthContext } from "../contexts/AuthProvider";

const Actividad = ({titol,id, adreca, data, image, errorImage, url, link, addFavAct}) => {
  const urlImage = `https://agenda.cultura.gencat.cat` + image;
  const urlErrorImage = `https://agenda.cultura.gencat.cat` + errorImage;
  const linkToUrl = link.split(",");
  /* ------- ESTOS ERRORES Y WARNINGS SON POR LAS urlIMAGES--------------------------
  Revisar error de chrome -->  indicate wheter to send a cookie in a cross-site request by     specifying its SameSite attribute
   tambien revisar --> Cross-Origin Read Blocking (CORB) ha bloqueado la respuesta de orígenes cruzados <URL> con el tipo de MIME text/html. Consulta la página <URL> para obtener más información. */
  const {currentUser} = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const addFavoriteAgenda = async () => {
    if(currentUser !== null){
      const favAgendaID = doc(db, 'users', `${currentUser.uid}`)
      setLike(!like)
      setSaved(!saved)
      await updateDoc(favAgendaID, {
        favoritesAgenda: arrayUnion({
          id:id,
          titol: titol
        })
      })
    }else{
      alert('Inicia sesión para guardar favoritos')
    }
  }

  return (
    <div className="mx-auto bg-naranja p-8 ">
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="h-72"><img 
          src={urlImage} 
          alt="agenda activity image"
          onError={(e) => (e.currentTarget.src = urlErrorImage)}
          className= "w-full h-72"
      /></figure>
      <div className="card-body">
        <div className="card-title bg-naranja/25 rounded-lg p-2"> 
          <h2 className="">{titol}</h2>
        </div>
        <div className="p-2">
          <p>{adreca}</p>
          <p>{data}</p>  
        </div> 
        <div className="card-actions flex justify-between">
          <button onClick={addFavoriteAgenda}>
            {like ? 
              <FaHeart color="red" size="25px"/> :
              <FaHeart size="25px"/>
            }
          </button>
          <button 
          className="btn btn-primary btn-xs "
          ><a
            href={linkToUrl[0]}
            target='_blank'
            >MORE INFO</a>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Actividad;