'use client'

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];
  return (
    <div className='p-5 rounded-lg background-soft flex items-center justify-between'>
      <div className='capitalize text-soft font-bold'>{lastSegment}</div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-lg'>
          <MdSearch />
          <input type="text" placeholder="Search..." className='bg-transparent text-soft border-none !outline-none' />
        </div>
        <div className='flex items-center gap-5'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar