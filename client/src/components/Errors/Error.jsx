import React from 'react'
import CountUp from 'react-countup'

const Error = ({ errorcode, errortitle, errordesc }) => {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen flex justify-center items-center p-4">
            <div className="bg-white bg-opacity-40 backdrop-blur-lg shadow-xl rounded-3xl p-10 max-w-lg text-center">
                <h1 className="text-7xl font-extrabold text-blue-700 tracking-wide drop-shadow-md">
                    <CountUp end={errorcode} duration={0.8} />
                </h1>
                <p className="mt-4 text-3xl font-semibold text-blue-800">{errortitle}</p>
                <p className="mt-3 text-gray-700">{errordesc}</p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    )
}

export default Error
