import React from 'react';
import { useState, useEffect } from 'react';
import SideIcons from './sideIcons';
import { sideIcons } from '../assets/icons/sideIcons/sideIcons';


const Aside: React.FC = () => {
  const [sideIconsObj, setSideIconsObj] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    const fetchIcons = async () => {
      const icons = await sideIcons;
      setSideIconsObj(icons);
    };

    fetchIcons();
  }, []);

  if (!sideIconsObj) {
    return <div className="transform -rotate-90">Chargement</div>; // Gère un état de chargement si nécessaire
  }

  return (
    <aside className=" bg-black text-white flex h-full absolute items-center ">
      <nav>
        <SideIcons contents={sideIconsObj}
        />
      </nav>
      <p className="text-xs transform -rotate-90 absolute bottom-24 text-nowrap -left-2">Copyright Sportsee 2020</p>
    </aside>
  );
};

export default Aside;