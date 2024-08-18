import React from 'react';
import logo from "/public/sportsee.svg";

const Header: React.FC = () => {
    return (
        <header className="z-10 bg-black text-white flex items-center p-4 text-2xl space-x-10">
            <div className="space-x-2 flex items-center">
                <img src={logo} alt="Logo de sportsee" />
                <p className="text-sportsee-red ">SportSee</p>
            </div>
            <nav className="p-4 flex-grow">
                <ul className="flex justify-around space-x-4">
                    <li><a href="#" className="text-white ">Accueil</a></li>
                    <li><a href="#" className="text-white ">Profil</a></li>
                    <li><a href="#" className="text-white ">Réglage</a></li>
                    <li><a href="#" className="text-white ">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;