import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const [photoError, setPhotoError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (name.length < 5) {
            setNameError('Name should be more than 5 character!');
            return;
        } else {
            setNameError('');
        }
        if (photo.length < 1) {
            setPhotoError('You should input an photo url!');
            return;
        } else {
            setPhotoError('');
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log(errorMsg);
            });
    }

    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl p-5">
            <h2 className='font-bold text-2xl text-primary text-center'>Register your account</h2>
            <div className="card-body text-primary">
                <form onSubmit={handleRegister} className="fieldset">
                    {/* Name */}
                    <label className="font-semibold">Your Name</label>
                    <input type="text" name='name' className="input bg-base-200 border-0" placeholder="Enter your name" required />
                    {nameError && <p className='text-red-500'>{nameError}</p>}

                    {/* Photo URL */}
                    <label className="font-semibold">Photo URL</label>
                    <input type="text" name='photo' className="input bg-base-200 border-0" placeholder="Enter your photo url" required />
                    {photoError && <p className='text-red-500'>{photoError}</p>}

                    {/* Email */}
                    <label className="font-semibold">Email Address</label>
                    <input type="email" name='email' className="input bg-base-200 border-0" placeholder="Enter your email address" required />

                    {/* Password */}
                    <label className="font-semibold">Password</label>
                    <input type="password" name='password' className="input bg-base-200 border-0" placeholder="Enter your password" required />

                    <label className="label mt-3">
                        <input type="checkbox" className="checkbox" />
                        Accept <Link className='font-semibold' to={'#'}>Term & Conditions</Link>
                    </label>

                    <button type='submit' className="btn btn-primary mt-4">Register</button>
                </form>
                <p className='text-center font-semibold mt-3'>Have An Account? Please <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;