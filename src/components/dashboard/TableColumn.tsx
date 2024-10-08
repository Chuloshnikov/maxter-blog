
const TableColumn = ({title, data}: {title: string, data: string[]}) => {
  return (
    <div className='border-2 border-gray-500 p-10'>
        <div className='flex flex-col items-center justify-center gap-2 text-2xl text-accentBg font-semibold'>
            <span>{data.length}</span>
            <span className="capitalize">{title}</span>
        </div>
    </div>
  )
}

export default TableColumn;