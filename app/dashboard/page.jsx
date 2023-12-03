import React from 'react'
import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/chart'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import { MdSupervisedUserCircle } from 'react-icons/md'

const MemoizedChart = React.memo(Chart);

const cardList = [
  {
    title: 'Total Users',
    id: 1,
    total: '10,928',
    deviation: '12%',
    deviationDescr: 'more than last week',
    icon: <MdSupervisedUserCircle size={24}/>
  },
  {
    title: 'Total Users',
    id: 2,
    total: '5,123',
    deviation: '15%',
    deviationDescr: 'more than last week',
    icon: <MdSupervisedUserCircle size={24}/>
  },
  {
    title: 'Total Users',
    id: 3,
    total: '15,897',
    deviation: '11%',
    deviationDescr: 'more than last week',
    icon: <MdSupervisedUserCircle size={24}/>
  },
]

const Dashboard = () => {
  return (
    <div className='flex gap-5 mt-5'>
      <div className='w-3/4 flex flex-col gap-5'>
        <div className='flex gap-5 justify-between'>
          {
            cardList.map((card) => (
              <Card key={card.id}
                title={card.title}
                total={card.total}
                deviation={card.deviation}
                deviationDescr={card.deviationDescr}
                icon={card.icon}
              />
            ))
          }
        </div>
        <Transactions />
        <MemoizedChart />
      </div>
      <div className='w-1/4'>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard
