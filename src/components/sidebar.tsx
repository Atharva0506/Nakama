"use client";
import { Home, Plus, Settings } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

export default function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();
  const routes = [
    {
      icon:Home,
      href: "/",
      label:"Home",
      pro:false
    },
    {
      icon:Plus,
      href: "/nakama/new",
      label:"Create",
      pro:true
    },
    {
      icon:Settings,
      href: "/settings",
      label:"Settings",
      pro:false
    },
  ];
  const onNavigate=(url:string,pro:boolean) =>{
    //TODO Check if Pro

    return router.push(url);
  }
  return (
    <div className='flex space-y-4 flex-col h-full text-primary bg-secondary'>
      <div className='p-3 flex-1 justify-center flex'>
        <div className='space-y-2'>
          {routes.map((route)=>{
            return(
            <div 
            onClick={()=>onNavigate(route.href,route.pro)}
            key={route.href}
            className={cn("text-muted-foreground text-xs group flex p-3 font-medium w-full justify-start cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
            pathName===route.href && "bg-primary/10 text-primary")
          }
            >
              <div className='flex flex-col gap-y-2 items-center flex-1'>
                <route.icon className='w-5 h-4'/>
                {route.label}
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
