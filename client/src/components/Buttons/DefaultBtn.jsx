import React from 'react'

const DefaultBtn = ({ label = "Click the Button", onClick, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`mt-6 px-6 py-2 rounded-xl shadow-md transition text-white font-semibold
                ${disabled
                    ? 'bg-blue-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400'}
            `}
        >
            {label}
        </button>
    )
}

export default DefaultBtn
