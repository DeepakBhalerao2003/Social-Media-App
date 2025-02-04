import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import FriendRequestList from "./FriendRequestList";

const FriendRequest = async () => {

  const {userId} = auth();

  if(!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where:{
      receiverId: userId,
    },
    include:{
      sender: true,
    }
  });

  if(requests.length == 0) return null;


  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-3">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-600">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-sm" >See All</Link>
      </div>

      {/* Bottom */}
      <FriendRequestList requests = {requests}/>

      


    </div>
  )
}

export default FriendRequest
