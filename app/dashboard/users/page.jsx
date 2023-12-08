import { Suspense } from "react";
import Search from "../../ui/dashboard/search/search";
import Link from 'next/link';

import {fetchUsers} from '@/app/lib/data';

import UsersList from "@/app/ui/dashboard/usersList/usersList";

const UsersPage = async ({searchParams}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';
  const users = fetchUsers(q, page);
  

  return (
    <div className='background-soft p-5 rounded-lg mt-5'>
      <div className='flex items-center justify-between'>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className='p-3 bg-[#5d57c9] text-soft rounded-md cursor-pointer'>Add New</button>
        </Link>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UsersList 
          promise={users} 
        />
      </Suspense>
    </div>
  )
}

export default UsersPage