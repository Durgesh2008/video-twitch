import { create } from "zustand";

interface SidebarStore{
    collapsed:boolean;
    onExapnd:()=>void;
    onCollapsed:()=>void

}

export const useSidebar = create<SidebarStore>((set)=>({
    collapsed:false,
    onExapnd:()=>set(()=>({collapsed:false})),
    onCollapsed:()=>set(()=>({collapsed:true}))
})

)