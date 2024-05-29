"use client"
import { satoshiFont } from "@/app/font";
import UserAvatar from "@/components/UserAvatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface UserItemProps {
  username: string;
  profilepic: string;
  islive: Boolean;
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
          islive = {true}
     
        />
            </div>
        </Link>
    
    </Button>
  
  );
};

export default UserItem;
