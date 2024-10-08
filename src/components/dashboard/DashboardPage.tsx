import Link from "next/link";
import PopularCategory from "./PopularCategory";
import TableColumn from "./TableColumn";
import { FaArrowRight } from "react-icons/fa";
import BlogGraph from "./BlogGraph";


const DashboardPage = ({ posts, comments }) => {
  return (
    <div className='p-2 flex flex-col gap-4'>
        <div className="flex flex-col mdl:flex-row gap-2">
            <div className="flex flex-col gap-2 mdl:mt-20">
                <TableColumn title={"posts"} data={[{}, {}]}/>
                <TableColumn title={"comments"} data={[{}, {}]}/>
            </div>
            <BlogGraph/>
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