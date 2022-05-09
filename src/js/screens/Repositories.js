import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Table from "../components/table/Table";
import { filters } from "../constants/repositories";

const Repositories = props => {
    let { organization } = useParams();

    const [repositories, setRepositories] = useState({});
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(null);

    const handlePagination = (limit) => {
        const url = `https://api.github.com/orgs/${organization}/repos?per_page=${limit}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setRepositories(json);
                setError(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }

    useEffect(() => {
        if (!Object.keys(repositories).length && !error) {
            handlePagination(25);
        }
    });

    return (
        <Table
            event={handlePagination}
            items={repositories}
            filters={filters}
            checkboxes={true}
        />
    )
}

export default Repositories;