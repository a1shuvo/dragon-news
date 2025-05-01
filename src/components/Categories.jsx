import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All category</h2>
            <div className='flex flex-col gap-3 mt-5'>
                {
                    categories.map((category) => (
                        <NavLink
                            className={"bg-base-100 hover:bg-base-200 border-0 font-semibold text-accent text-left py-2 px-10"}
                            to={`/category/${category.id}`}
                            key={category.id}
                        >
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;