import Search from "../../ui/dashboard/search/search";
import Link from 'next/link';
import Image from 'next/image';
import Pagination from "../../ui/dashboard/pagination/pagination";
import {fetchUsers} from '@/app/lib/data';
import {formatDateToString} from '@/app/utils/common';
import {deleteUserById} from '@/app/lib/actions';

const UsersPage = async ({searchParams}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';
  const {users, count} = await fetchUsers(q, page);
  

  return (
    <div className='background-soft p-5 rounded-lg mt-5'>
      <div className='flex items-center justify-between'>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className='p-3 bg-[#5d57c9] text-soft rounded-md cursor-pointer'>Add New</button>
        </Link>
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map(({id, img, username, email, createdAt, isAdmin, isActive}) => (
              <tr key={id}>
                <td>
                  <div className='flex  items-center gap-3'>
                    <Image
                      src={img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className='rounded-[50%] object-cover'
                    />
                    {username}
                  </div>
                </td>
                <td>{email}</td>
                <td>{ formatDateToString(createdAt) }</td>
                <td>{isAdmin ? 'Admin' : 'Client'}</td>
                <td>{isActive ? 'Active' : 'Not Active'}</td>
                <td>
                  <div className='flex gap-2'>
                    <Link href={`/dashboard/users/${id}`}>
                      <button className='px-2 py-1 rounded-md text-text border-none cursor-pointer bg-[teal]'>
                        View
                      </button>
                    </Link>
                    <form action={deleteUserById}>
                    <input type="hidden" name="id" value={id} />
                      <button className="px-2 py-1 rounded-md text-text border-none cursor-pointer bg-[crimson]">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
        </table>
        <Pagination count={count}/>
    </div>
  )
}

export default UsersPage