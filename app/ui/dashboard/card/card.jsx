 import React from 'react'
 
 const Card = ({title, total, deviation, deviationDescr, icon}) => {
   return (
     <div className='w-full flex p-5 gap-5 cursor-pointer background-soft hover:bg-[#2e374a] rounded-lg'>
      {icon}
      <div className='flex flex-col gap-5'>
        <span>{title}</span>
        <span className='text-2xl'>{total}</span>
        <span className='text-sm'>
          <span className='text-green-400'>{deviation} </span> 
          {deviationDescr}
        </span>
      </div>
     </div>
   )
 }
 
 export default Card   