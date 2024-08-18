import React from 'react';
import SideIcons from './sideIcons';
import { sideIcons } from '../assets/icons/sideIcons/sideIcons';


const sideIconsObj = await sideIcons;

const Aside: React.FC = () => {
  return (
<aside className="z-0 bg-black text-white fixed left-0 top-0 flex flex-col justify-center items-center h-full space-y-4">
<nav>
            <SideIcons contents={sideIconsObj}
            />
        </nav>
      <p className="p-4 text-xs transform -rotate-90 absolute bottom-20 text-nowrap">Copyright Sportsee 2020</p>
    </aside>
  );
};

export default Aside;