import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    return (
        <div className='space-y-5 border border-base-300 p-5'>
            <img className='w-full object-contain rounded-sm' src={news.image_url} alt="" />
            <h2 className='font-bold text-2xl'>{news.title}</h2>
            <p className='text-primary'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'><FaArrowLeft></FaArrowLeft> All News in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;