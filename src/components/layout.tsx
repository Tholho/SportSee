import React from 'react';
import Header from './header';
import Aside from './aside';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout flex flex-col min-h-screen">
            <Header />
            <Aside />
            <main className="p-4 ml-48 mt-10 flex-grow flex-col h-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;