import React, { useState } from 'react';

export default function AddProject() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        technologies: '',
        demoUrl: '',
        githubUrl: '',
        featured: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Project</h2>

                <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Title" className="w-full p-2 border rounded" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />

                <input name="image" value={formData.image} onChange={handleChange} type="text" placeholder="Image URL" className="w-full p-2 border rounded" />
                <input name="technologies" value={formData.technologies} onChange={handleChange} type="text" placeholder="Technologies (comma separated)" className="w-full p-2 border rounded" />

                <input name="demoUrl" value={formData.demoUrl} onChange={handleChange} type="url" placeholder="Demo URL" className="w-full p-2 border rounded" />
                <input name="githubUrl" value={formData.githubUrl} onChange={handleChange} type="url" placeholder="GitHub URL" className="w-full p-2 border rounded" />

                <div className="flex items-center space-x-2">
                    <input name="featured" checked={formData.featured} onChange={handleChange} type="checkbox" id="featured" className="h-4 w-4" />
                    <label htmlFor="featured" className="text-sm">Featured</label>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}
