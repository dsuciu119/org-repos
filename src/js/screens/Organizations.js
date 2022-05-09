import Table from "../components/table/Table";
import React, { useEffect, useState } from "react";
import { filters } from "../constants/organization";

const Organizations = () => {
    const [organizations, setOrganizations] = useState({});
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(25);

    const handlePagination = (limit) => {
        setLimit(limit);
        const url = `https://api.github.com/organizations?since=${offset}&&per_page=${limit}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setOrganizations(json);
                setOffset(offset.id);
                setError(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }

    useEffect(() => {
        if (!Object.keys(organizations).length && !error) {
            handlePagination(25);
        }
    });

    return (
        <Table
            event={handlePagination}
            items={organizations}
            filters={filters}
        />
    )
}

export default Organizations