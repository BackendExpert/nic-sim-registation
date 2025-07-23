import React, { useEffect, useState } from 'react'
import DefaultInput from '../../components/Forms/DefaultInput'
import DefaultBtn from '../../components/Buttons/DefaultBtn'
import { useNavigate } from 'react-router-dom'
import { signin } from '../../services/auth'

const SignIn = () => {
    const naviagte = useNavigate()
    const [formData, setFormData] = useState({
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

        const result = await signin(formData);
        if (result.success) {
            setMessage(result.message);
            alert(result.message)
            setIsSuccess(true);
            naviagte('/Dashboard/Home');
        } else {
            setMessage(`Error: ${result.error}`);
            setIsSuccess(false);
        }
    };
    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-8 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://wallpapercave.com/wp/wp15140065.webp')`
            }}
        >
            <div className="w-full max-w-md bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-4">
                    Welcome to SIM Registration
                </h1>
                <p className="text-center text-blue-700 font-medium mb-8 text-sm sm:text-base">
                    Please sign in to continue
                </p>

                <form onSubmit={handleSubmit} method="post" className="space-y-6">
                    <DefaultInput
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        onChange={handleChange}
                        required
                    />
                    <DefaultInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        onChange={handleChange}
                        required
                    />
                    <div className="text-center">
                        <DefaultBtn
                            type="submit"
                            label="Sign In"
                        />
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-blue-900">
                    <div className="flex justify-center">
                        <div className="">
                            <a href="#" className="text-blue-700 underline hover:text-blue-900 transition-colors">
                                Forget Password
                            </a>
                        </div>
                        <div className="px-2">|</div>
                        <div className="">
                            <a href="/Signup" className="text-blue-700 underline hover:text-blue-900 transition-colors">
                                Create New Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
