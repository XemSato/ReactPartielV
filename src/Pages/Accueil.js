import React from 'react';
import Baniere from "../Components/Baniere";
import ImageBaniere from "../Img/test.svg";
import "../index.css";
const Accueil = () => {
    return (
        <div>
            <div className="Banierre">
                <Baniere title="Bienvenue sur BlogerDamie" description="Le site de votre actualité mensuel" url={ImageBaniere} />
             </div>
        </div>
    );
};

export default Accueil;