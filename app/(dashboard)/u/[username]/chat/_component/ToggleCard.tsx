"use client";
import { updateStream } from "@/actions/stream";
import { satoshiFont } from "@/app/font";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import React, { useTransition } from "react";
import { toast } from "sonner";
type FieldType = "isChatEnable" | "isChatDelayed" | "isChatFollowersOnly";
interface ToggleCardProps {
  field: FieldType;
  label: string;
  value: boolean;
}
const ToggleCard = ({ field, label, value }: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();
  const onchange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("chat setting updated"))
        .catch(() => toast.error("something went wrong"));
    });
  };

  return (
    <div className={`rounded-xl bg-gray-500 p-6 ${satoshiFont.className}`}>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-sm lg:text-md shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            className="bg-red-200"
            checked={value}
            onCheckedChange={onchange}
            disabled={isPending}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;

export const ToggleCardSkeleton = ()=>{
    return(
      <Skeleton className="rounded-xl p-10 w-full"/>
    )
}
