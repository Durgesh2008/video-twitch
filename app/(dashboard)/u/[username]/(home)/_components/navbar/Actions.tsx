import { outfitFont, satoshiFont } from "@/app/font";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
  return (
    <>
      <div className="flex justify-end items-center gap-x-2 ml-4 lg:ml-0">
        <Button
          size="sm"
          variant="ghost"
          className="text-muted-foreground hovre:text-primary flex flex-col"
          asChild
        >
          <Link href="/">
            <LogOut />
            Exit
          </Link>
    
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default Actions;
