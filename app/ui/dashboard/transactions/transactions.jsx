import Image from "next/image"

const transactionsList = [
  {
    image: '/noavatar.png',
    name: 'John Doe',
    status: 'pending',
    date: '14.02.2023',
    amount: '$3,200'
  },
  {
    image: '/noavatar.png',
    name: 'Danny Gray',
    status: 'done',
    date: '14.02.2023',
    amount: '$1,500'
  },
  {
    image: '/noavatar.png',
    name: 'Ronda Kellistone',
    status: 'canceled',
    date: '14.02.2023',
    amount: '$3,500'
  },
  {
    image: '/noavatar.png',
    name: 'Alex Lastville',
    status: 'pending',
    date: '14.02.2023',
    amount: '$4,200'
  },
  {
    image: '/noavatar.png',
    name: 'John Terry',
    status: 'done',
    date: '14.02.2023',
    amount: '$3,200'
  }
]

const renderStatusBg = (bg) => {
  switch (bg) {
    case 'pending': {
      return 'bg-[#bae6fd]'
    }
    case 'done': {
      return 'bg-[#86efac]'
    }
    case 'canceled': {
      return 'bg-[#fda4af]'
    }
    default: {
      return 'bg-[#d6d3d1]'
    }
  }
}

const Transactions = () => {
  return (
    <div className="background-soft p-5 rounded-lg">
      <h2 className="mb-5 font-extralight text-soft">Latest Transactions</h2>
      <table className='w-full '>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Data</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {
            transactionsList.map((transaction) => (
              <tr>
                <td className="flex gap-2 items-center"><Image className="rounded-[50%]" src={transaction.image} alt='' width={40} height={40}/>{transaction.name}</td>
                <td>
                  <span className={`${renderStatusBg(`${transaction.status}`)} inline-block px-2 py-1 rounded-lg`}>
                    {transaction.status}
                    </span>
                </td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions