import {useContext} from "react";
import { AuthContext } from "../contexts/AuthProvider";
import FavoriteList from "../components/FavoriteList";
import {auth} from "../firebase/firebase";
const Profile = () => {
  const {logOut, currentUser} = useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
  };
  const fakeData = [
    {id: 1, descripcion:"favorito 1"},
    {id: 2, descripcion:"favorito 2"},
    {id: 3, descripcion:"favorito 3"},
  ] 
  /*async function findOrCreateDocFirestore (idDocument){
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocument}`);
    //buscar documento
    const consulta = await getDoc(docuRef);
    //revisar si existe
    if (consulta.exists()) {
      //si si existe
      const infoDocu = consulta.data();
      return infoDocu.favoritos;
    }else {
      //si no existe
      await setDoc(docuRef, {favoritos: [...fakeData]});
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.favoritos;
    }

    

    
  }

  useEffect(() =>{
    async function fetchFav(){
      const favResult = await findOrCreateDocFirestore(email);
      
    }
    fetchFav();
  },[])*/
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
    
    <div className="bg-amarillo m-5 border border-black rounded-lg text-center">FAVORITOS</div>
      
        <FavoriteList />
      
    </div>
    
  )
}

export default Profile