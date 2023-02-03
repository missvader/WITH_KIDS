import React from "react";
import Logo from "../assets/withKidsLogo.png";


const Preloader = () => {
  return (
    <div className="bg-blanco flex flex-col " id="loading-screen">
      <div className="m-5">
        <img src={Logo} alt="With Kids App Logo" className=""/>
      </div>
      <div className="m-5">
        <p className="text-center text-lg">Descubre zonas de juego infantil, la agenda cultural de la ciudad, actividades infantiles y familiares de las bibliotecas, y restaurantes family-friendly</p> 
        <p className="text-center mt-5 text-lg font-semibold">Disfruta de la ciudad en familia</p> 
      </div>
      
    </div>
  )
}

export default Preloader;