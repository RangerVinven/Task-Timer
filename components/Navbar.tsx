import { FiSettings } from 'react-icons/fi';

export default function Navbar(): JSX.Element {
    return (
        <div className="flex">
            <div className="w-fit px-1 flex-shrink-0">
                <h1 className="text-2xl font-bold">Task Timer</h1>
            </div>
            <div className="w-full">
                <div className="flex justify-end items-center">
                    <div className="p-1">
                        <FiSettings size={30} className="hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}
