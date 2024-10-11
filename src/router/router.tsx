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
            throw new Error("Base data could not be loaded");
        }

        userData.base = await responseBase.json();

        const responseActivity = await fetch((envData[1]), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!responseActivity.ok) {
            throw new Error("Activity data could not be loaded");
        }

        userData.activity = await responseActivity.json();

        const responseAverageSessions = await fetch((envData[2]), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!responseAverageSessions.ok) {
            throw new Error("Average sessions data could not be loaded");
        }
        userData.averageSessions = await responseAverageSessions.json();

        const responsePerformance = await fetch((envData[3]), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!responsePerformance.ok) {
            throw new Error("Performance data could not be loaded");
        }
        userData.performance = await responsePerformance.json();

        return userData;
    }
    catch (error) {
        console.error('Data loading failed:', error);
        throw error;
        
    }

};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Home />,
        loader: homeLoaderDB,
    },
]);

export default router