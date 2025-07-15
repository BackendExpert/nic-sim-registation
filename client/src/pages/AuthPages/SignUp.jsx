import React, { useState } from 'react'
import DefaultInput from '../../components/Forms/DefaultInput'
import DefaultBtn from '../../components/Buttons/DefaultBtn'
import { signup } from '../../services/auth'

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsSuccess(null);

        const result = await signup(formData);
        if (result.success) {
            setMessage(result.message);
            setIsSuccess(true);
        } else {
            setMessage(`Error: ${result.error}`);
            setIsSuccess(false);
        }
    };


    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-8 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://wallpapercave.com/wp/wp15140049.webp')`
            }}
        >
            <div className="w-full max-w-md bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-4">
                    Welcome to SIM Registration
                </h1>
                <p className="text-center text-blue-700 font-medium mb-4 text-sm sm:text-base">
                    SignUp
                </p>

                {message && (
                    <div className={`mb-4 text-sm text-center rounded-lg py-3 px-4 
                        ${isSuccess ? 'bg-green-100 text-green-800 border border-green-300'
                            : 'bg-red-100 text-red-800 border border-red-300'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <DefaultInput
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <DefaultInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <div className="text-center">
                        <DefaultBtn
                            type="submit"
                            label="Create New Account"
                        />
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-blue-900">
                    <a href="/" className="text-blue-700 underline hover:text-blue-900 transition-colors">
                        Already have an Account ?
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SignUp
