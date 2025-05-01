import React from 'react';
import swimImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playImg from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swimImg} alt="Swiming" />
                <img src={classImg} alt="Class" />
                <img src={playImg} alt="Playground" />
            </div>
        </div>
    );
};

export default QZone;