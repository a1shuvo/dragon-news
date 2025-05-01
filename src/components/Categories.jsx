import React, { use } from 'react';
const categoryPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div className='font-bold'>
            All category ({categories.length})
        </div>
    );
};

export default Categories;