import React from 'react';
import Header from './Header';
import Aside from './Aside';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Aside />
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow p-4">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;