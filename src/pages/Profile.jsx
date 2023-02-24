import {useContext} from "react";
import { AuthContext } from "../contexts/AuthProvider";
import FavoriteList from "../components/FavoriteList";
import Background from "../assets/backgroundApp.png"
import { MdLogout} from "react-icons/md";

const Profile = () => {
  const {logOut, currentUser} = useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
  };
  
  return (
    <div className="flex flex-col  m-auto static h-screen w-screen"> 
      <img src={Background} alt="background" className="bg-image w-screen absolute bottom-0 opacity-50"/>
      <div className="container absolute flex flex-col ">
        <div className=" m-5">
          <div className="flex justify-end">
            <button className="text-lila font-normal" onClick={handleLogOut}>
              Sortir 
            </button>
            <MdLogout size={20} className="m-2" color="purple"/>
          </div>
          <div className="mt-5 text-3xl font-semibold leading-10 uppercase text-center text-lila">¡HOLA {currentUser.displayName}!</div> 
        </div>
        <div className="flex items-center m-5 ">
          <div className="bg-azul grow h-0.5"></div>
          <p className=" text-center text-azul mx-3">ELS TEUS FAVORITS</p>
          <div className="bg-azul grow h-0.5"></div>
        </div>
        <FavoriteList />
    </div>
    </div>
    
  )
}

export default Profile