import React from "react";
import { useLoaderData } from "react-router-dom";
import Layout from "../components/layout";

const Home: React.FC = () => {
    const data = useLoaderData();

    return (
        <Layout>
        </Layout>
    );
}

export default Home;