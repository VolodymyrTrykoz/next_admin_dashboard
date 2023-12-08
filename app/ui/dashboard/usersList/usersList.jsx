    import React from 'react'
    import Image from 'next/image';
    import Link from 'next/link';
    import {formatDateToString} from '@/app/utils/common';
    import {deleteUserById} from '@/app/lib/actions';


    const UsersList = async ({promise, deleteUserById}) => {
        const {users} = await promise;
        
        return (
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
    )
}

export default UsersList