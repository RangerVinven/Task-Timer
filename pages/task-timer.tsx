import React from 'react'
import { useSession } from "next-auth/react"

import Navbar from '../components/Navbar';

export default function TaskTimer() {
    return (
        <div>
            <Navbar />
            <div>Task Timer</div>
        </div>
    )
}