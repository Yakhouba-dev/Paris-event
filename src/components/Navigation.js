import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="favoris" activeClassName="nav-active">
                Favoris
            </NavLink>
            <NavLink exact to="listing" activeClassName="nav-active">
                Liste des événements
            </NavLink>
        </div>
    );
};

export default Navigation;