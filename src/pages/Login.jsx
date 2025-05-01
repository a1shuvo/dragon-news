import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    const { userSignIn } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userSignIn(email, password)
            .then((result) => {
                const user = result.user;
                alert(`${user.email} SignIn Successful`)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl p-5">
            <h2 className='font-bold text-2xl text-primary text-center'>Login your account</h2>
            <div className="card-body text-primary">
                <form onSubmit={handleLogin} className="fieldset">
                    {/* Email */}
                    <label className="font-semibold">Email Address</label>
                    <input type="email" name='email' className="input bg-base-200 border-0" placeholder="Enter your email address" />

                    {/* Password */}
                    <label className="font-semibold">Password</label>
                    <input type="password" name='password' className="input bg-base-200 border-0" placeholder="Enter your password" />

                    <button type='submit' className="btn btn-primary mt-4">Login</button>
                </form>
                <p className='text-center font-semibold mt-3'>Don't Have An Account? <Link className='text-secondary' to={'/auth/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;