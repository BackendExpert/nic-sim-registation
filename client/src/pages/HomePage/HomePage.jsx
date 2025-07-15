import React, { useState } from 'react'
import DateInput from '../../components/Forns/DateInput'
import DefaultInput from '../../components/Forns/DefaultInput'
import Dropdown from '../../components/Forns/Dropdown'
import FileInput from '../../components/Forns/FileInput'
import TextAreaInput from '../../components/Forns/TextAreaInput'
import DefaultBtn from '../../components/Buttons/DefaultBtn'

const HomePage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        date: '',
        description: '',
        category: '',
        file: null
    })

    const handleChange = (e) => {
        const { name, value, type, files } = e.target
        setForm({
            ...form,
            [name]: type === 'file' ? files : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Data:', form)
        alert('Form submitted. Check console log!')
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-8 text-blue-800">
                Test Your Components 🚀
            </h1>
            <form onSubmit={handleSubmit}>
                <DefaultInput
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />
                <DefaultInput
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                />
                <DateInput
                    label="Select Date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />
                <Dropdown
                    label="Choose Category"
                    name="category"
                    onChange={handleChange}
                    options={[
                        { value: 'option1', label: 'Option 1' },
                        { value: 'option2', label: 'Option 2' },
                        { value: 'option3', label: 'Option 3' },
                    ]}
                    required
                />
                <TextAreaInput
                    label="Description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                />
                <FileInput
                    label="Upload File"
                    name="file"
                    onChange={handleChange}
                    accept=".jpg,.png,.pdf"
                />
                <DefaultBtn label="Submit Form" type="submit" />
            </form>
        </div>
    )
}

export default HomePage
