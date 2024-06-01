"use client"
import { satoshiFont } from "@/app/font";
import LiveBadge from "@/components/Live-Badge";
import UserAvatar from "@/components/UserAvatar";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface UserItemProps {
  username: string;
  profilepic: string;
  islive?: Boolean;
}

const UserItem = ({ username, profilepic, islive }: UserItemProps) => {
    const pathname = usePathname()
    const {collapsed} = useSidebar((state )=>state)
    const href = `/${username}`
    const isActive = pathname === href
  return (
    <Button
    asChild
    variant="ghost"
    className={cn("w-full h-12 ", collapsed ? "justify-center":"justify-start",isActive && "bg-accent")}
    >
        <Link href={href}>
            <div className={cn("flex w-full gap-x-4 items-center", collapsed && "justify-center")}>
        <UserAvatar
        username={username}
         profilepic={profilepic}
          islive = {islive}
     
        />
        {
          !collapsed && <p className="truncate">
            {username}
          </p>
        }
        {
          !collapsed && islive && (
            <LiveBadge className="ml-auto"/>
          )
        }
            </div>
        </Link>
    
    </Button>
  
  );
};

export default UserItem;

export const UserItemSkeleton = ()=>{

 return(
  <li className=" flex items-center gap-x-4 px-3 py-2">
  <Skeleton className="min-h-[32px] min-w-[32px] rounded-full"/>
  <div className="flex-1" >
  <Skeleton className="h-6"/>
  </div>
  
    </li>
 )
}