import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        const getFilteredNews = () => {
            if (id === '0') return data;
            if (id === '1') return data.filter(news => news?.others?.is_today_pick === true);
            return data.filter(news => news?.category_id == id);
        };

        setCategoryNews(getFilteredNews());
    }, [data, id]);

    return (
        <div>
            CategoryNews - {`Found ${categoryNews.length} News`}
        </div>
    );
};

export default CategoryNews;