"use client";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import {ITEMS_PER_PAGE} from '@/app/utils/constants';


const Pagination = ({count}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();


  const params = new URLSearchParams(searchParams);
  let page = params.get('page');



  const hasPrev = parseInt(page) <= 1;
  const hasNext = parseInt(count) / parseInt(ITEMS_PER_PAGE) >= parseInt(page);


  const handlePagination = (direction) => {
    direction === 'back' ?
    params.set('page', parseInt(page) - 1) :
    params.set('page', parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  }


  
  return (
    <div className='flex justify-between p-2'>
      <button
        className='px-1 py-2 cursor-pointer disabled:cursor-not-allowed'
        disabled={hasPrev}
        onClick={() => handlePagination('back')}
      >
        Previous
      </button>
      <button
        className='px-1 py-2 cursor-pointer disabled:cursor-not-allowed'
        disabled={!hasNext}
        onClick={() => handlePagination('forward')}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination