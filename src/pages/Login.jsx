import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl p-5">
            <h2 className='font-bold text-2xl text-primary text-center'>Login your account</h2>
            <div className="card-body text-primary">
                <form className="fieldset">
                    {/* Email */}
                    <label className="font-semibold">Email Address</label>
                    <input type="email" className="input bg-base-200 border-0" placeholder="Enter your email address" />

                    {/* Password */}
                    <label className="font-semibold">Password</label>
                    <input type="password" className="input bg-base-200 border-0" placeholder="Enter your password" />

                    <button className="btn btn-primary mt-4">Login</button>
                </form>
                <p className='text-center font-semibold mt-3'>Don't Have An Account? <Link className='text-secondary' to={'/auth/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;