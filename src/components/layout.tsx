import React from 'react';
import Header from './header';
import Aside from './aside';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout flex flex-col h-screen">
            <Header />
            <Aside />
            <main className="flex p-4 ml-36 mt-8 flex-grow flex-col items-stretch">
                {children}
            </main>
        </div>
    );
};

export default Layout;