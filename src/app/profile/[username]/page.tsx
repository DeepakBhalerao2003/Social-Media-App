import Feed from "@/components/feed/Feed"
import LeftMenu from "@/components/LeftMenu/LeftMenu"
import RightMenu from "@/components/RightMenu/RightMenu"
import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { notFound } from "next/navigation"

const ProfilePage = async ({params}: {params:{username: string}}) => {

  const username = params.username;

  const user = await prisma.user.findFirst({
    where:{
      username,
    },
    include:{
      _count:{
        select:{
          followers: true,
          followings: true,
          posts: true,
        }
      }
    }
  });

  if(!user) return notFound();

  const {userId: curUserId} = auth();

  let isBlocked;

  if(curUserId){
    const res = await prisma.block.findFirst({
      where:{
        blockerId: user.id,
        blockedId: curUserId,
      }
    });

    if(res) isBlocked = true;

    else isBlocked = false;
  };

  if(isBlocked ) return notFound();

  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image 
                  src={user.coverPic || "/noCover.png"}
                  alt=""
                  fill
                  className="rounded-md object-cover"
              />
              <Image 
                  src={user.avatar || "/noAvatar.png"}
                  alt=""
                  width={128} height={128 }
                  className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10 object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">{(user.fname && user.surname ) ? user.fname + " " + user.surname :  user.username}</h1>
            {/* profile sumamry */}
            <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                    <span className="font-medium">{user._count.posts}</span>
                    <span className="text-sm">Posts</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="font-medium">{user._count.followers}</span>
                    <span className="text-sm">Followers</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="font-medium">{user._count.followings}</span>
                    <span className="text-sm">Following</span>
                </div>
            </div>
          </div>
          <Feed  />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] xl:w-[30%]"> 
        <RightMenu user={user}/>
      </div>
    </div>
  )
}

export default ProfilePage
