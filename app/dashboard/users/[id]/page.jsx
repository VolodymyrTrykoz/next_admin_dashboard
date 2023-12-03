import { Suspense } from 'react'
import Image from "next/image";
import {fetchUserById} from '@/app/lib/data';
import {updateUserById} from '@/app/lib/actions'

const SingleUserPage = async ({ params }) => {
  const user = await fetchUserById(params.id);

  const {username, address, email, img, isActive, isAdmin, password, phone} = user;
  
  return (
    <div className='flex gap-[50px] mt-5'>
      <div className='w-1/4 background-soft p-5 font-bold text-soft h-[max-content]'>
        <div className='w-full h-[300px] relative rounded-lg overflow-hidden mb-5'>
          <Suspense fallback='Loading...'>
            <Image src={img || "/noavatar.png"} alt="" fill className="object-cover"/>
          </Suspense>
        </div>
        {username}
      </div>
      <div className='w-3/4 background-soft rounded-lg p-5'>
        <form action={updateUserById} className='form flex flex-col'>
          <input type="hidden" name="id" value={params.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={email} />
          <label>Password</label>
          <input type="password" name="password" placeholder={password} />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={isAdmin}>Yes</option>
            <option value={false} selected={!isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={isActive}>Yes</option>
            <option value={false} selected={!isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;