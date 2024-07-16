import prisma from '@/lib/client'
import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = async ({user} : {user: User}) => {

    const postsWithMedia = await prisma.post.findMany({
        where:{
            userId : user.id,
            img:{
                not: null,
            }
        },
        take: 8,
        orderBy:{
            createdAt:"desc",
        }
    });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-3">
        {/* Top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-600">User Media</span>
            <Link href="/" className="text-blue-500 text-sm" >See All</Link>
        </div>

       <div className='flex justify-between gap-4 flex-wrap'>
           {postsWithMedia.length ? postsWithMedia.map(post => (
                <div className='relative w-1/5 h-24 ' key={post.id}>
                    <Image 
                        src={post.img!}
                        fill 
                        alt=""
                        className='object-cover rounded-md'
                    />
                </div>
            )) : "No Media Found!"
            }

            

            
       </div>
    </div>
  )
}

export default UserMediaCard
