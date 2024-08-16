import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/home";

const homeLoader = async () => {
    try {
        const response = await fetch('http://localhost:3000/user/12', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            // Si la réponse n'est pas ok, lève une erreur
            throw new Error('Network response was not ok');
        }

        // Analyse la réponse JSON
        const data = await response.json();

        // Retourne les données
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);

        // Retourne une valeur ou lève une erreur si nécessaire
        throw error;
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: homeLoader,
    },
]);


export default router