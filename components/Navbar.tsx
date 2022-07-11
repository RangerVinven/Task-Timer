import { useSession, signIn, signOut } from "next-auth/react"
import { FiSettings } from 'react-icons/fi';

export default function Navbar(): JSX.Element {
    const { data: session } = useSession();

    if(session) {
        return (
            <div>
                <div className="flex">
                    <div className="w-fit px-1 flex-shrink-0">
                        <h1 className="text-2xl font-bold">Task Timer</h1>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-end items-center">
                            <div className="p-1 flex">
                                <FiSettings size={30} className="mr-1.5 hover:cursor-pointer" />
                                <button onClick={() => signOut()} className="bg-gray-300 rounded-md px-1">Sign out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-300 h-0.5"></div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="flex bg-gray-100">
                    <div className="w-fit px-1 flex-shrink-0">
                        <h1 className="text-2xl font-bold">Task Timer</h1>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-end items-center">
                            <div className="p-1">
                                <button className="bg-gray-300 rounded-md px-1 mr-1.5" onClick={() => signIn()}>Sign in</button>
                                <button className="border-gray-300 bg-transparent border border-solid rounded-md px-1" onClick={() => signIn()}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-300 h-0.5"></div>
            </div>
        )
    }
}
