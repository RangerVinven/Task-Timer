import React from 'react'
import { useSession } from "next-auth/react"

import Navbar from '../components/Navbar';

export default function TaskTimer() {
    return (
        <div>
            <Navbar />
            
            <div className="flex justify-center items-center mb-5">
                <h1 className="text-3xl font-bold">Task Timer</h1>
            </div>

            <div className="w-full h-full flex justify-center items-center">

                <div className="flex justify-center flex-col w-72">
                    <div className="flex justify-evenly mb-5">
                        <p className="mr-2">Make the task timer</p>
                        <p className="mr-2 bg-blue-400 text-white font-bold px-1 rounded-sm">00:30:10</p>
                        <button className="bg-green-300 rounded-md px-1">Play</button>
                    </div>

                    <div className="flex justify-center">
                        <input className="w-42 bg-slate-200 pl-1 mr-3 rounded-md" type="text" placeholder="Task" />
                        <button className="bg-green-300 px-1 rounded-md" onClick={() => fetch("/api/tasks/addTask", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                task: "Hello",
                                hours: 1,
                                minutes: 30,
                                seconds: 15
                            })
                        })}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}