import React from 'react';
import swimImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playImg from '../assets/playground.png'
import bgImg from '../assets/bg.png'

const QZone = () => {
    return (
        <>
            <div className='bg-base-200 p-3'>
                <h2 className='font-bold mb-5'>QZone</h2>
                <div className='space-y-5'>
                    <img src={swimImg} alt="Swimming" />
                    <img src={classImg} alt="Class" />
                    <img src={playImg} alt="Playground" />
                </div>
            </div>
            <img className='w-full' src={bgImg} alt="Background" />
        </>

    );
};

export default QZone;