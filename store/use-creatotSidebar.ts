import { create } from "zustand";

interface CreatorSidebarStore{
    collapsed:boolean;
    onExapnd:()=>void;
    onCollapsed:()=>void

}

export const CreatorSidebar = create<CreatorSidebarStore>((set)=>({
    collapsed:false,
    onExapnd:()=>set(()=>({collapsed:false})),
    onCollapsed:()=>set(()=>({collapsed:true}))
})

)