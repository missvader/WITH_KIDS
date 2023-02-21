import React , {useState, useContext} from "react";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import { AuthContext } from "../contexts/AuthProvider"; 
import { db } from "../firebase/firebase";

const Restaurant = ({name, address, web, phone, tags, image,id}) => {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const {currentUser} = useContext(AuthContext)
  

  const addFavoriteRest = async () => {
    if(currentUser !== null){
      const favRestID = doc(db, 'users', `${currentUser.uid}`)
      setLike(!like)
      setSaved(!saved)
      await updateDoc(favRestID, {
        favoritesRestaurants: arrayUnion({
          id:id,
          name:name
        })
      })
    }else{
      alert('Inicia sesión para guardar favoritos')
    }
  }
  return (
    <div className="mx-auto bg-amarillo p-8 ">
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="restaurant  image"
          className="w-full h-72"
        />
        </figure>
      <div className="card-body">
        <div className="card-title bg-amarillo/25 rounded-lg p-2"> 
          <h2 className="">{name}</h2>
        </div>
        <div className="p-2">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{tags}</p>  
        </div> 
        <div className="card-actions flex justify-between">
          <button className="  " onClick={addFavoriteRest}>
            {like ? 
              <FaHeart color="red" size="25px"/> :
              <FaRegHeart size="25px"/>
            }
          </button>
          <button 
          className="btn btn-primary btn-xs"
          onClick={() => window.open(web, '_blank')}
          >More Info</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Restaurant;