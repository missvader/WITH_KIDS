import React from "react";
import Logo from "../assets/withKidsLogo.png";
import Background from "../assets/backgroundApp.png"
 

const Preloader = () => {
  return (
   <div className=" flex flex-col static w-screen h-full" id="">
      <img src={Background} alt="background" className="bg-image w-screen absolute bottom-0 opacity-70"/>
      <div className="mx-14 mt-12">
        <p className="text-center text-xl  text-azul uppercase mx-8 font-normal">Disfruta de la ciudad con tus hijos</p>
      </div>
      <div className="content  absolute flex flex-col mt-32 mx-10">
        <div className="m-5  grid justify-items-center ">
          <img src={Logo} alt="With Kids App Logo" className="logo text-center"/>
        </div>
        <div className="mx-5 mb-5 mt-10 bg-lila p-5 rounded">
          <p className="text-center  text-white uppercase">Descubre zonas de juego, actividades y restaurantes</p> 
        </div>
        <div className="mb-5 mx-5 bg-dorado p-5 rounded">
          <p className="text-center  text-white ">ENCUENTRA PROPUESTAS PARA HACER EN FAMILIA</p> 
        </div>
      </div> 
      
   </div>
    
  )
}

export default Preloader;