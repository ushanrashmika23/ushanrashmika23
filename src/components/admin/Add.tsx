import React from 'react'
import { Link } from 'react-router-dom'

export default function Add() {
    const btnClass = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded block w-40 text-center mb-2";

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
            <div className="p-4 space-y-2">
                <Link to="/project" className={btnClass}>Project</Link>
                <Link to="/project" className={btnClass}>Experience</Link>
                <Link to="/project" className={btnClass}>Tech</Link>
            </div>
        </div>
    )
}
