"use client";

import { acceptFollowRequest } from "@/lib/action";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type requestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: requestWithUser[] }) => {
  const [requestState, setrequestState] = useState(requests);

  const accept = async(requestId: number, userId: string) => {
    removeOptimisticRequest(requestId)

    try {
        await acceptFollowRequest(userId);
        setrequestState(prev => prev.filter((req) => req.id !== requestId));
    } catch (error) {
        
    }
  }
  
  const [optimisticRequest, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );
  return (
    <>
      {requests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <span>
              {request.sender.fname && request.sender.surname
                ? request.sender.fname + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Accept */}
            <Image
              src="/accept.png"
              width={20}
              height={20}
              className="cursor-pointer"
              alt=""
            />
            {/* Reject  */}
            <Image
              src="/reject.png"
              width={20}
              height={20}
              className="cursor-pointer"
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequestList;
