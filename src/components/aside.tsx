import React from 'react';
import SideIcons from './sideIcons';
import { sideIcons } from '../assets/icons/sideIcons/sideIcons';

const sideIconsObj = await sideIcons;

const Aside: React.FC = () => {
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