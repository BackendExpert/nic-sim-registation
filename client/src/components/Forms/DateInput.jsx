import React from 'react'

const DateInput = ({ label, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <input
                type="date"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            />
        </div>
    )
}

export default DateInput
