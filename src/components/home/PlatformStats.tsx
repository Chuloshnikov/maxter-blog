import { FiUsers } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";

const PlatformStats = () => {
  return (
     <div className="py-10 w-full mx-auto flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-sky-400 border-0 text-white">
                <div className="p-8">
                    <FiUsers  className="h-8 w-8 mb-4" />
                    <div className="text-2xl font-bold">1.2K+</div>
                    <div className="text-sky-100">Active Writers</div>
                </div>
            </div>
            <div className="bg-sky-500 border-0 text-white">
                <div className="p-8">
                    <FiMessageSquare className="h-8 w-8 mb-4" />
                    <div className="text-2xl font-bold">5.8K+</div>
                    <div className="text-sky-100">Articles Published</div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-sky-100 text-sky-700 px-6 py-4 text-lg font-semibold">Uncensored</div>
            <div className="bg-sky-100 text-sky-700 px-6 py-4 text-lg font-semibold">Community Driven</div>
            <div className="bg-sky-100 text-sky-700 px-6 py-4 text-lg font-semibold">Free Expression</div>
        </div>
    </div>
  )
}

export default PlatformStats;