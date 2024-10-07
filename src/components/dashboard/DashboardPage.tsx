import Link from "next/link";
import PopularCategory from "./PopularCategory";
import TableColumn from "./TableColumn";
import { FaArrowRight } from "react-icons/fa";


const DashboardPage = ({ AllPosts }) => {
  return (
    <div className='p-2 flex flex-col gap-4'>
        <div className="flex gap-2">
            <div className="flex flex-col gap-2">
                <TableColumn title={"posts"} data={[{}, {}]}/>
                <TableColumn title={"comments"} data={[{}, {}]}/>
            </div>
            <div>
                graph

                _______________________________________________________________________________________
            </div>
        </div>
        <div className="">
            <PopularCategory/>
        </div>
        <div>
            <Link 
            className="flex items-center justify-center py-6 px-10 bg-accentBg border-4 border-accentBg text-white text-2xl text-center hover:text-accentBg hover:bg-white duration-200  font-semibold"
            href={'/admin/advertisements'}>
               <div className="flex gap-2 items-center">
                    <span>Advertisements and marketing</span> <FaArrowRight />
                </div> 
            </Link>
        </div>
    </div>
  )
}

export default DashboardPage;