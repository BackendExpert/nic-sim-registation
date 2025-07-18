import React from 'react'
import DefaultBtn from '../../components/Buttons/DefaultBtn'
import DefaultInput from '../../components/Forms/DefaultInput'

const VerifyEmail = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-8 bg-cover bg-center"
        >
            <div className="w-full max-w-md bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-4">
                    Verify Your Email
                </h1>
                <p className="text-center text-red-700 font-medium mb-4 text-sm sm:text-base">
                    You must verify email here if not you cannot verify after and cannot signin to system
                </p>

                <form className="space-y-6">
                    <DefaultInput
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="username"
                        required
                    />
                    <div className="text-center">
                        <DefaultBtn
                            type="submit"
                            label="Verify Email Address"
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default VerifyEmail