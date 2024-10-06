import { FaEye } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const Statistics = () => {
  return (
    <div className="flex gap-2 items-center text-sm text-accentBg font-semibold">
        <div>
            <div className="flex gap-1 items-center">
                24
                <FaEye className="w-5 h-5"/>
            </div>
        </div>
        <div>
            <div className="flex gap-1 items-center">
                35
                <BiSolidLike className="w-5 h-5"/>
            </div>
        </div>
        <div>
            <div className="flex gap-1 items-center">
                27
                <BiSolidDislike className="w-5 h-5 -mb-1"/>
            </div>
        </div>
    </div>
  )
}

export default Statistics;