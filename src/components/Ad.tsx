import Image from "next/image"
import Link from "next/link"


const Ad = ({size }: {size: "sm" | "md" | "lg"}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top */}
      <div className="flex justify-between items-center font-medium text-gray-500">
        <span className="text-gray-600">Sponsored Ads</span>
        <Image 
            src="/more.png"
            height={16}
            width={16}
            alt=""
        />
      </div>

      {/* Bottom */}

      <div className={`flex flex-col mt-4 ${size === "sm"? "gap-2": "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24": size === "md" ? "h-36": "h-48" }`}>
            <Image 
                src="https://images.pexels.com/photos/7654136/pexels-photo-7654136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                className="rounded-lg object-cover"
            />
        </div>
        <div className="flex items-center gap-4 ">
        <Image 
                src="https://images.pexels.com/photos/7654136/pexels-photo-7654136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={24}
                height={24}
                className="rounded-full w-6 h-6 object-cover"
            />
            <span className="text-blue-500 font-medium">
                Titan
            </span>
        </div>

        <p className={`${size === "sm"? "text-xs": "text-sm"}`}>
            {size === "sm" ? "Get 30% off on all products Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            : size === "md" ? "Get 20% off on all products Lorem ipsum dolor sit amet Get 30% off on all products Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            : "Get 30% off on all products Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Get 30% off on all products Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Get 30% off on all products Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."}

        </p>

        <button className="bg-gray-200 text-gray-700 p-2 text-xs rounded-lg">Learn More</button>
      </div>
    </div>
  )
}

export default Ad
