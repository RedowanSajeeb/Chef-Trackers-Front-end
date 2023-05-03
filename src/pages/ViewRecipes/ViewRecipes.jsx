import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipes = () => {
    const { name } = useLoaderData();
    return (
        <div>
            {name}
        </div>
    );
};

export default ViewRecipes;