import React from 'react'

const Dropdown = ({ label, name, onChange, required = false, options = [] }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <select
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            >
                <option value="">Select an option</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown
