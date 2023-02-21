import {useContext} from "react";
import { AuthContext } from "../contexts/AuthProvider";
import FavoriteList from "../components/FavoriteList";
const Profile = () => {
  const {logOut, currentUser} = useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
  };
  
  
  return (
    <div> 
    <div className="bg-gray-400 border-black m-5 border rounded-lg h-32 text-center ">
      <div className="text-xl font-bold">BIENVENID@ {currentUser.displayName}</div> 
      <div className="">
        <button className="btn btn-xs m-5" onClick={handleLogOut}>
          CERRAR SESIóN
        </button>
      </div>
    </div>
    
    <div className="bg-amarillo m-5 border border-black rounded-lg text-center font-bold">FAVORITOS</div>
      
        <FavoriteList />
      
    </div>
    
  )
}

export default Profile