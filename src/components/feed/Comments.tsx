import Image from "next/image"

const Comments = () => {
  return (
    <div className="flex flex-col">
      {/* Write */}
      <div className="flex items-center gap-4 ">
        <Image 
            src="https://images.pexels.com/photos/26776509/pexels-photo-26776509/free-photo-of-a-rock-formation-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
        />

        <div className=" flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <input type="text" placeholder="Write a Comment...." className="bg-transparent outline-none flex-1" />
            <Image 
                src="/emoji.png"
                alt=""
                height={16}
                width={16}
                className="cursor-pointer"
            />
        </div>
      </div>


      {/* Comments */}

      <div >
        <div className="flex gap-4 mt-6 justify-between">
            {/* Avatar */}
            <Image 
                src="https://images.pexels.com/photos/26776509/pexels-photo-26776509/free-photo-of-a-rock-formation-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                alt=""
                width={40}
                height={40}
                className=" w-10 h-10 rounded-full"
            />

            {/* Description */}
            <div className="flex-1 flex flex-col gap-2">
                {/* user name */}
                <span className="font-medium">John Cena</span>

                {/* Comment text */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi suscipit cupiditate voluptates beatae facere rem porro voluptatibus consequatur. Veritatis iure doloremque neque dicta quod ipsam asperiores quibusdam ratione quas.
                </p>

                {/* Comment Interaction */}
                <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                    <div className="flex gap-2 items-center">
                        <Image 
                            src="/like.png"
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer w-4 h-4"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123 Likes</span>
                    </div>

                    <div className="">
                        Reply
                    </div>
                </div>
            </div>

            {/* Icon */}
            <Image
                src="/more.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer w-4 h-4"
            />

        </div>
      </div>

    </div>
  )
}

export default Comments
