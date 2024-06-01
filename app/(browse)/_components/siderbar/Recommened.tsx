"use client";

import { satoshiFont } from "@/app/font";
import { useSidebar } from "@/store/use-sidbar";
import { User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkeleton } from "./UserItem";

interface RecommenedProps {
  data: User[];
}

const Recommened = ({ data }: RecommenedProps) => {
  const { collapsed } = useSidebar((state) => state);
  const showLoabel = !collapsed && data.length > 0;
//   console.log(data);
  return (
    <div>
      {showLoabel && (
        <div className="pl-6 mb-4">
          <p
            className={`text-sm text-muted-foreground ${satoshiFont.className}`}
          >
            Recommended
          </p>
        </div>
      )
      }

      <ul className="space-y-2 px-2">
        {data?.map((ele) => <UserItem key={ele.id} username={ele.username} profilepic={ele.imageUrl} islive = {true}/>)}
      </ul>
    </div>
  );
};

export default Recommened;
export const RecommendedSkeleton = ()=>{
  return(
    <ul className="px-2">
    {
      [...Array(3)].map((_,i)=>{
        return(
          <UserItemSkeleton key={i}/>
        )
      })
    
    }
      </ul>
  )
 

}
