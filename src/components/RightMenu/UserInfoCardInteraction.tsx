"use client";

import { switchBlock, switchFollow } from "@/lib/action";
import { stat } from "fs";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
    curUserId,
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
curUserId: string;
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {


    const [userState, setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followReqSent : isFollowingSent,
    });

    const [optimisticState,  switchOptimisticState] = useOptimistic(
      userState,
      (state, value: "follow" | "block") => value === "follow" ?({
        ...state,
        following: state.following && false,
        followReqSent: !state.following && !state.followReqSent ? true : false,
      }) : ({
        ...state,
        blocked : !state.blocked,
      })
    );

    const follow = async ()=>{
      switchOptimisticState("follow");
        try {
            await switchFollow(userId);
            setUserState(prev => ({
                ...prev,
                following: prev.following && false,
                followReqSent: !prev.following && !prev.followReqSent ? true : false,
            }));
        } catch (error) {
            
        }
    };



    const block = async () => {
      switchOptimisticState("block");
      try {
        await switchBlock(userId);
        setUserState(prev => ({
          ...prev,
          blocked : !prev.blocked,
        }))
        
      } catch (error) {
        
      }
    }

    

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white rounded-md text-sm p-2">
          {optimisticState.following 
            ? "Following"
            : userState.followReqSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>

      <form action={block} className="self-end">
        <button>
          <span className="text-red-500  text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
