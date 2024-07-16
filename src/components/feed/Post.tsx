import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">

        {/* User div */}
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <Image 
                    src="https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                    alt=""
                    height={40}
                    width={40}
                    className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">Ricky Jonathan</span>
            </div>
            <Image 
                src="/more.png"
                alt=""
                height={16}
                width={16}
            />
        </div>

        {/* Description div */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image 
                    src="https://images.pexels.com/photos/14081998/pexels-photo-14081998.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                    alt=""
                    fill 
                    className="object-cover rounded-md"
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est, in, labore debitis obcaecati eius culpa reiciendis quo nulla necessitatibus explicabo aperiam eos omnis unde expedita nihil voluptate odio provident?
            </p>
        </div>

        {/* Interaction Div */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/like.png"
                        alt=""
                        height={16}
                        width={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline">Likes</span></span>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/comment.png"
                        alt=""
                        height={16}
                        width={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline">Comments</span></span>
                </div>

            </div>

            <div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/share.png"
                        alt=""
                        height={16}
                        width={16}
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline">Shares</span></span>
                </div>
            </div>

        </div>

        <Comments />
    </div>
  )
}

export default Post
