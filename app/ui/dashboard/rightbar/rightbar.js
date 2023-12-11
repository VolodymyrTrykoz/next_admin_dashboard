import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const cardsList = [
  {
    icon: '🔥',
    notification: 'Available Now',
    title: 'How to use the new version of the admin dashboard?',
    subtitle: 'Takes 4 minutes to learn',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eius libero perspiciatis recusandae possimus.',
    withBgImg: true,
    btnIcon: <MdPlayCircleFilled />,
    btnText: 'Watch'
  },
  {
    icon: '🚀',
    notification: 'Coming Soon',
    title: 'New server actions are available, partial pre-rendering is coming up!',
    subtitle: 'Boost your productivity',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit eius libero perspiciatis recusandae possimus.',
    withBgImg: false,
    btnIcon: <MdReadMore />,
    btnText: 'Learn'
  }
];

const Rightbar = () => {
  return (
    <div className="fixed">
      {
        cardsList.map(({icon, notification, title, subtitle, descr, withBgImg, btnIcon, btnText}) => (
          <div key={title} className="bg-gradient-to-t from-[#182237] to-[#253352] p-5 md:p-6 rounded-lg mb-5 relative">
            {
              withBgImg && (
                <div className='absolute right-0 bottom-0 w-1/2 h-1/2'>
                  <Image className='object-contain opacity-20' src="/astronaut.png" alt="" fill />
                </div>
              )
            } 
            <div className='flex flex-col gap-6'>
              <span className='font-bold'>{icon} {notification}</span>
              <h3 className=''>
                {title}
              </h3>
              <span className='text-soft font-medium text-[12px]'>{subtitle}</span>
              <p className='text-soft text-sm'>
                {descr}
              </p>
              <button className='px-4 py-2 flex items-center gap-2 bg-[#5d57c9] text-white rounded cursor-pointer w-[max-content]'>
                {btnIcon}
                {btnText}
              </button>
            </div>
          </div>
        ))
      }  
    </div>
  )
}

export default Rightbar