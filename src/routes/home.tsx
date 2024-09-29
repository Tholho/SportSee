import React from "react";
import { useLoaderData, useRouteError } from "react-router-dom";
import Layout from "../components/layout";
import Graphs from "../components/graphs";
import Hello from "../components/hello";
import Nutri from "../components/nutri";
import { UserData } from "../types/data";

const Home: React.FC = () => {
    const error = useRouteError();
    const data = useLoaderData() as UserData;

    return (
        <Layout>
            {error ? (
                <div>
                    Erreur de chargement des données, plus d'informations dans la console.
                </div>
            )
                : (<>
                    <Hello data={data.base?.data} />
                    <div className="flex flex-grow mb-4 h-full gap-2">
                        <Graphs data={data} />
                        <Nutri data={data.base?.data} />
                    </div>
                </>)}

        </Layout>
    );
}

export default Home;