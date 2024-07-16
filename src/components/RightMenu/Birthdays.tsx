import Image from "next/image"
import Link from "next/link"


const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-3">
        {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-600">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-sm" >See All</Link>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
           <Image 
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
            alt=""
           />
           <span>Jay Shah</span>
        </div>

        <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
        </div>
      </div>

      {/* Upcoming Birthdays */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 ">
        <Image 
            src="/gift.png"
            width={24}
            height={24}
            alt=""
        />
        <Link href="/" className="flex flex-col gap-1 text-xs">
            <span className=" text-gray-700 font-semibold">Upcoming Birthdays</span>
            <span className="text-gray-500">See other 16 have Upcoming Birthdays</span>
        </Link>
      </div>
    </div>
  )
}

export default Birthdays
