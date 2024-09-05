import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/home";
import { UserData } from "../types/data";

const envData = API_Array(import.meta.env.VITE_API_UserMock)

function API_Array(env: string): string[] {
    let data: string[] = new Array(4);
    data[0] = env;
    data[1] = env + "/activity";
    data[2] = env + "/average-sessions";
    data[3] = env + "/performance";
    if (env.includes("Mock")) {
        data = data.map(data => data + ".json")
    }
    return data;
}

const homeLoaderDB = async () => {

    try {
        const userData: UserData = {
            base: null,
            activity: null,
            averageSessions: null,
            performance: null,
        }
        const responseBase = await fetch(envData[0], {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!responseBase.ok) {
            // Si la réponse n'est pas ok, lève une erreur
            throw new Error('Network response was not ok');
        }

        // Analyse la réponse JSON
        userData.base = await responseBase.json();

        const responseActivity = await fetch((envData[1]), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!responseActivity.ok) {
            // Si la réponse n'est pas ok, lève une erreur
            throw new Error('Network response was not ok');
        }

        // Analyse la réponse JSON
        userData.activity = await responseActivity.json();

        const responseAverageSessions = await fetch((envData[2]), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!responseAverageSessions.ok) {
            // Si la réponse n'est pas ok, lève une erreur
            throw new Error('Network response was not ok');
        }

        // Analyse la réponse JSON
        userData.averageSessions = await responseAverageSessions.json();


        const responsePerformance = await fetch((envData[3]), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!responsePerformance.ok) {
            // Si la réponse n'est pas ok, lève une erreur
            throw new Error('Network response was not ok');
        }

        // Analyse la réponse JSON
        userData.performance = await responsePerformance.json();
        // Retourne les données
        return userData;
    } catch (error) {
        console.error('Failed to fetch data:', error);

        // Retourne une valeur ou lève une erreur si nécessaire
        throw error;
    }

};

//console.log(import.meta.env)
// utiliser les Vite env 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: homeLoaderDB,
    },
]);


export default router