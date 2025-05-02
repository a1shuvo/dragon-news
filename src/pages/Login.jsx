import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    const [error, setError] = useState('');
    const { userSignIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userSignIn(email, password)
            .then(() => {
                // const user = result.user;
                navigate(`${location?.state ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl p-5">
            <h2 className='font-bold text-2xl text-primary text-center'>Login your account</h2>
            <div className="card-body text-primary">
                <form onSubmit={handleLogin} className="fieldset">
                    {/* Email */}
                    <label className="font-semibold">Email Address</label>
                    <input type="email" name='email' className="input bg-base-200 border-0" placeholder="Enter your email address" required />

                    {/* Password */}
                    <label className="font-semibold">Password</label>
                    <input type="password" name='password' className="input bg-base-200 border-0" placeholder="Enter your password" required />

                    {error && <p className='text-red-500'>{error}</p>}

                    <button type='submit' className="btn btn-primary mt-4">Login</button>
                </form>
                <p className='text-center font-semibold mt-3'>Don't Have An Account? <Link className='text-secondary' to={'/auth/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;