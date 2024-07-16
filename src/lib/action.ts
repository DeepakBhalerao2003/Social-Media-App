"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client";
import { use } from "react";

export const switchFollow = async (userId: string) => {
    const {userId: currentUserID} = auth();
    if(!currentUserID) {
        throw new Error("User is not authenticated!");
    }
    try {

        const existingFollow = await prisma.follower.findFirst({
            where:{
                followerId:currentUserID,
                followingId: userId,
            }
        });

        if(existingFollow){
            await prisma.follower.delete({
                where:{
                    id:existingFollow.id,
                }
            })
        }else{
            const existingFollowReq = await prisma.followRequest.findFirst({
                where:{
                    senderId: currentUserID,
                    receiverId: userId,
                }
            });

            if(existingFollowReq){
                await prisma.followRequest.delete({
                    where:{
                        id: existingFollowReq.id,
                    }
                })
            }else{
                await prisma.followRequest.create({
                    data:{
                        senderId: currentUserID,
                        receiverId: userId,
                    }
                })
            }
        }

    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
};

export const switchBlock = async (userId: string) => {
    const {userId: currentUserID} = auth();
    if(!currentUserID) {
        throw new Error("User is not authenticated!");
    }
    try {
        const existingBlock = await prisma.block.findFirst({
            where:{
                blockerId: currentUserID,
                blockedId: userId,
            }
        });

        if(existingBlock){
            await prisma.block.delete({
                where:{
                    id: existingBlock.id,
                }
            });
        }
        else{
            await prisma.block.create({
                data:{
                    blockerId: currentUserID,
                    blockedId: userId,
                }
            });
        }
        
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}


export const acceptFollowRequest = async (userId: string) => {
    const {userId: currentUserID} = auth();
    if(!currentUserID) {
        throw new Error("User is not authenticated!");
    }

    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where :{
                senderId: userId,
                receiverId: currentUserID,
            }
        });
    
        if(existingFollowRequest){
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id,
                }
            })
        };
    
        await prisma.follower.create({
            data:{
                followerId: userId,
                followingId: currentUserID,
            }
        });
    } catch (error) {
            console.log(error);
    }
}



export const declineFollowRequest = async (userId: string) => {
    const {userId: currentUserID} = auth();
    if(!currentUserID) {
        throw new Error("User is not authenticated!");
    }

    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where :{
                senderId: userId,
                receiverId: currentUserID,
            }
        });
    
        if(existingFollowRequest){
            await prisma.followRequest.delete({
                where: {
                    id: existingFollowRequest.id,
                }
            })
        };
    
       
    } catch (error) {
            console.log(error);
    }
}