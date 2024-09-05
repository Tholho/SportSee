import React from "react";
import { useLoaderData } from "react-router-dom";
import Layout from "../components/layout";
import Graphs from "../components/graphs";
import Hello from "../components/hello";
import Nutri from "../components/nutri";
import { UserData } from "../types/data";

const Home: React.FC = () => {
    const data = useLoaderData() as UserData;
    //console.log(data);

    return (
        <Layout>
            <Hello data={data.base?.data} />
            <div className="flex flex-grow">
                <Graphs data={data} />
                <Nutri data={data.base?.data} />
            </div>
        </Layout>
    );
}

export default Home;