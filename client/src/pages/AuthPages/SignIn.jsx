import React from 'react'
import DefaultInput from '../../components/Forms/DefaultInput'
import DefaultBtn from '../../components/Buttons/DefaultBtn'

const SignIn = () => {
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

                <form method="post" className="space-y-6">
                    <DefaultInput
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <DefaultInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
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
                    Forgot your password?{' '}
                    <a href="#" className="text-blue-700 underline hover:text-blue-900 transition-colors">
                        Reset here
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SignIn
