import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Menu">
            <h1>BlogerDamie</h1>
            <ul>
                
               
                <li className="style"><Link to="/news">Dernière nouvelle</Link></li>
                <div>|</div>
                <li className="style Not"><Link to="/contact">Contact</Link></li>
                <div>|</div>
                <li className="style Not"><Link to="/login">Conexion</Link></li>
                
            </ul>
            
        </nav>
    );
};

export default Nav;