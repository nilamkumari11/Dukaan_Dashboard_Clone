
import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'
import { useState } from 'react'
import { BlueCard } from './components/BlueCard'
import { Orders } from './components/Orders'

function App() {
const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex bg-stone-50'>
      <Sidebar isOpen={sidebarOpen}></Sidebar>
      <div className='ml-0 lg:ml-51'>
        <Navbar  toggleSidebar={() => setSidebarOpen(!sidebarOpen)} ></Navbar>
        <div className='flex items-center justify-between pt-24 '>
          <h2 className='pl-8 text-2xl font-medium'>Overview</h2>
          <div className='flex items-center bg-white shadow text-gray-500 p-2 mr-4'>
            <h2 className='mr-2'>This Month</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div className='flex pt-7 gap-4 justify-between flex-wrap mr-4'>
          <BlueCard title={"Next Payout"} amount={"2,312.23"} orderCount={23}/>
          <Card title={"Amount pending "} amount={"92,312.20"} orderCount={13}></Card>
          <Card title={"Amount Processed"} amount={"23,92,312.19"}></Card>
        </div>
        <h2 className='text-xl font-medium pl-8 pt-6'>Transactions | This Month</h2>
        <div className='flex pl-8 pt-6 gap-4'>
          <h2 className='bg-gray-200 p-2 pl-3 pr-3 rounded-4xl'>Payouts (22)</h2>
          <h2 className='bg-cardBg text-white p-2 pl-3 pr-3 rounded-4xl'>Refunds (6)</h2>
        </div>
        <Orders></Orders>
        <div className='flex items-center text-lg justify-center pb-6'>
          <h2 className='mr-1'>Made with </h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <div className='flex ml-1'><h2> by </h2>
            <h2 className='text-xl font-semibold ml-2'>Nilam Kumari</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
