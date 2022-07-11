import React from 'react'
import { useSession } from "next-auth/react"

import Navbar from '../components/Navbar';

export default function TaskTimer() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-3xl font-bold">Task Timer</h1>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-evenly">
                    <p className="mr-2">Make the task timer</p>
                    <p className="mr-2 bg-blue-400 text-white font-bold px-1 rounded-sm">00:30:10</p>
                    <button className="bg-green-300 rounded-md px-1">Play</button>
                </div>
            </div>
        </div>
    )
}