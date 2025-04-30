import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <img className='w-[350px]' src={logo} alt="logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent'><span className='text-primary'>{format(new Date(), "EEEE")}</span>{format(new Date(), ", MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;