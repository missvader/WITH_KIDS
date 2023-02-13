import React from "react";
import Logo from "../assets/withKidsLogo.png";
import Background from "../assets/cuenta-cuentos-COLLAGE.jpg"
 /*<div className="bg-blanco flex flex-col  " id="loading-screen">
      <div className="m-5 md:w-64 lg:w-80">
        <img src={Logo} alt="With Kids App Logo" className=""/>
      </div>
      <div className="m-5">
        <p className="text-center text-lg">Descubre zonas de juego infantil, la agenda cultural de la ciudad, actividades infantiles y familiares de las bibliotecas, y restaurantes family-friendly</p> 
        <p className="text-center mt-5 text-lg font-semibold">Disfruta de la ciudad en familia</p> 
      </div>
      
  </div>*/

const Preloader = () => {
  return (
   <div className=" flex flex-col relative " id="loading-screen">
      <img src={Background} alt="background" className="bg-image h-full w-screen opacity-70"/>
      <div className="content  absolute mx-auto">
        <div className="m-5 md:w-64 lg:w-80  mx-auto">
          <img src={Logo} alt="With Kids App Logo" className=""/>
        </div>
        <div className="m-5 bg-naranja p-5 rounded-3xl">
          <p className="text-center text-lg font-sans font-semibold">Descubre zonas de juego, actividades y restaurantes</p> 
        </div>
        <div className="m-5 bg-lila p-5 rounded-3xl">
          <p className="text-center text-lg font-sans font-semibold ">Disfruta de la ciudad en familia</p> 
        </div>
      </div> 
      
   </div>
    
  )
}

export default Preloader;