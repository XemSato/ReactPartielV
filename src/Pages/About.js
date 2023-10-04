import React from "react";
import Baniere from "../Components/Baniere";
import ImageBaniere from "../Img/test.svg";
import { Link, Outlet } from "react-router-dom";
import "../index.css";
const About = () => {
  return (
    <div>
      <div className="Banierre">
        <Baniere title="A propos de nous !" description="Découvrer nos valeurs !" url={ImageBaniere} />
      </div>

      <div>
        <h2>Qui sommes-nous</h2>
        <div className="Flexy">

            <Link to="nos-missions"><div className="Bande1">
              Nos mission
            </div></Link>
        
            <Link to="nos-valeurs"><div className="Bande2">
              Nos valeurs
            </div></Link>

  
            <Link to="nos-chiffres"><div className="Bande3">
              Nos chiffres
            </div></Link>
        </div>
           <Outlet />
        
      </div>
    </div>
  );
};

export default About;
