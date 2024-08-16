import React from "react";
import { useLoaderData } from "react-router-dom";

const Home: React.FC = () => {
    const data = useLoaderData();

    return (
        <>
        <div className="bg-blue-500 text-red-300 p-4">
            Hello, Tailwind CSS!
        </div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

export default Home;