import React from 'react'
import { Menu } from 'lucide-react'
import { Sheet,SheetContent,SheetTrigger} from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'
export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Menu/>
      </SheetTrigger>
      <SheetContent side="left" className='p-0 bg-secondary w-32 pt-10'>
        <Sidebar/>
      </SheetContent>
    </Sheet>
  )
}
