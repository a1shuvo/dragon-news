import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl p-5">
            <h2 className='font-bold text-2xl text-primary text-center'>Register your account</h2>
            <div className="card-body text-primary">
                <form className="fieldset">
                    {/* Name */}
                    <label className="font-semibold">Your Name</label>
                    <input type="text" className="input bg-base-200 border-0" placeholder="Enter your name" />

                    {/* Photo URL */}
                    <label className="font-semibold">Photo URL</label>
                    <input type="text" className="input bg-base-200 border-0" placeholder="Enter your photo url" />

                    {/* Email */}
                    <label className="font-semibold">Email Address</label>
                    <input type="email" className="input bg-base-200 border-0" placeholder="Enter your email address" />

                    {/* Password */}
                    <label className="font-semibold">Password</label>
                    <input type="password" className="input bg-base-200 border-0" placeholder="Enter your password" />

                    <label className="label mt-3">
                        <input type="checkbox" className="checkbox" />
                        Accept <Link className='font-semibold' to={'#'}>Term & Conditions</Link>
                    </label>

                    <button className="btn btn-primary mt-4">Register</button>
                </form>
                <p className='text-center font-semibold mt-3'>Have An Account? Please <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;