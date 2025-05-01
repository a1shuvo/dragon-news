import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

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
            <h2 className='font-bold mb-5'>
                Total <span className='text-secondary'>{categoryNews.length}</span> News Found
            </h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news =>
                        <NewsCard
                            key={news.id}
                            news={news}
                        />)
                }
            </div>

        </div>
    );
};

export default CategoryNews;