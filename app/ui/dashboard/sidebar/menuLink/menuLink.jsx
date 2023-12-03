'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const MenuLink = ({el}) => {
  const { path, icon, title } = el;
  const pathname = usePathname (); 

  return (
    <Link href={path} className={`${pathname === path ? 'bg-[#2e374a]' : ''} flex items-center p-5 gap-[10px] hover:bg-[#2e374a] my-[5px] rounded-[10px]`}>
        {icon}
        {title}
    </Link>
  )
}

export default MenuLink