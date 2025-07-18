import React, { useEffect, useState } from 'react'
import DefaultBtn from '../../components/Buttons/DefaultBtn'
import DefaultInput from '../../components/Forms/DefaultInput'
import secureLocalStorage from 'react-secure-storage'
import { useNavigate } from 'react-router-dom'
import { verifyemail } from '../../services/auth'

const VerifyEmail = () => {
    const navigate = useNavigate()
    const emailverifytokem = secureLocalStorage.getItem('verifyemail')

    useEffect(() => {
        if (emailverifytokem) {
            return true
        }
        else {
            localStorage.clear()
            navigate('/', { replace: true })
        }
    }, [])

    const [verifyemaildata, setverifyemaildata] = useState({
        otp: ''
    })

    const handleChange = (e) => {
        setverifyemaildata({ ...verifyemaildata, [e.target.name]: e.target.value });
    };

    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);


    const headleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsSuccess(null);

        const result = await verifyemail(verifyemaildata);
        if (result.success) {
            setMessage(result.message);
            setIsSuccess(true);
            localStorage.clear()
            navigate('/', {replace: true})
        } else {
            setMessage(`Error: ${result.error}`);
            setIsSuccess(false);
        }
    }

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
                        name="otp"
                        placeholder="OTP Number"
                        value={verifyemaildata.otp}
                        onChange={handleChange}
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